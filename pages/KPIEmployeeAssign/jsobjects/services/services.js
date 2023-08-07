export default {
	handleReset: () => {
		resetWidget('ContainerAssignDepartment')
	},
	handleSubmit: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		const isValidLogin = await validateToken.runValidateToken();
		if(!isValidLogin){
			return;
		}
		const dataAPI = await helpers.transformDataAPI();

		if(dataAPI.kpi_list.length <1){
			showModal('NotMatchDepartModal');
			return
		}
		await api_post_pmSetinngs_evaluates.run(
			{
				'employee_ids': dataAPI.employee_ids,
				'kpi_list': dataAPI.kpi_list,
				'kpi_type': dataAPI.kpi_type
			}
		);

		storeValue('default_assign_tab','kpi_group_list')
		showAlert('Save data Success','success');

		removeValue('employeeList');
		removeValue('selectOptions');
		removeValue('checkAutoEvaluate');
		removeValue('checkAutoEvaluateEdit');
		removeValue('editModalDetails');
		removeValue('assignDepartmentKPIList');

		navigateTo('KPI_Employee', {'tab':'Department KPI'}, 'SAME_WINDOW');
	},
	addSelectedEmployee: () => {

		// return appsmith.store.employeeList
		const checkDiffTeam = [];
		const selectedEmployeeIDs = SelectEmployee.selectedOptionValues;
		const curentEmployees = appsmith.store.employeeList;
		const newEmployees = get_my_team.data.filter(item => selectedEmployeeIDs.includes(item.id));
		const transformResult	= helpers.transformEmployeeData(newEmployees);
		const mergeArray = curentEmployees ? curentEmployees.concat(transformResult) : transformResult

		if(appsmith.store.employeeList.length>0){
			for(let i=0;i < transformResult.length;i++){
				if(appsmith.store.employeeList[0]["Team"]!==transformResult[i]["Team"]){
					checkDiffTeam.push(transformResult[i])
				}
			}
		} else if(transformResult.length>1) {
			for(let i=1;i < transformResult.length;i++){
				if(transformResult[0]["Team"]!==transformResult[i]["Team"]){
					checkDiffTeam.push(transformResult[i])
				}
			}
		}

		if(checkDiffTeam.length>0){
			showModal('diffTeamModal')
			return;
		}

		selectServices.updateSelectOption(mergeArray);
		storeValue('employeeList',mergeArray);
		resetWidget('SelectEmployee')
	},
	deleteSelectedEmployee: (thisEmployee) => {
		let currentSelectedEmployee = appsmith.store.employeeList;
		const indexOfRemovedData = currentSelectedEmployee.findIndex(item => item["Employee ID"] === thisEmployee["Employee ID"])
		currentSelectedEmployee.splice(indexOfRemovedData,1)
		selectServices.updateSelectOption(currentSelectedEmployee)
		storeValue('employeeList',currentSelectedEmployee)
	}
}