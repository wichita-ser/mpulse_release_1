export default {
	employee: [ //this data are retrived from back-end
		{
			"id": 20201152,
			"name": "Warakorn Lertwattanapong",
			"email":"warakorn@gmail.com",
			"Tel": "0877945612",
		},
		{
			"id": 20201153,
			"name": "Sainamphung Phanphet",
			"email":"sainamphung@gmail.com",
			"Tel": "0877945612",
		},
		{
			"id": 20201154,
			"name": "Nawaporn Manyanon",
			"email":"nawaporn@gmail.com",
			"Tel": "0877945612",
		},
		{
			"id": 20201155,
			"name": "Prangprai Rattanachetchutha",
			"email":"prangrai@gmail.com",
			"Tel": "0877945612",
		},
		{
			"id": 20201156,
			"name": "Phumchanok Sakdakampanar",
			"email":"phumchanok@gmail.com",
			"Tel": "0877945612",
		},
		{
			"id": 20201157,
			"name": "Tanawat Limsakul",
			"email":"tanawat@gmail.com",
			"Tel": "0877945612",
		}
	],
	displayData: () => {
		return [
			{process: "Supervisor Goal Setting", startDate:"12/November/23", endDate: "11/November/23" },
			{process: "Employee Goal Setting", startDate:"", endDate: "" },
			{process: "Supervisor Core value Setting", startDate:"", endDate: "" },
			{process: "Employee Core value Setting", startDate:"", endDate: "" },
			{process: "Supervisor Evaluation", startDate:"", endDate: "" }, 
			{process: "Employee Evaluation", startDate:"", endDate: "" }, 
		]
	},
	transformEmployeeOptions: () => {
		const selectOptions = appsmith.store.selectOptions;
		return selectOptions.map(item => {
			return {
				label: item.name,
				value: item.employee_id
			}
		})
	}, 

	addSelectedEmployee: async () => {
		//const newSelectOptions = []
		const curentEmployees = appsmith.store.editEmployeeListAdminManagement;
		const Employees = get_my_team.data.filter(item => SelectMember.selectedOptionValues.includes(item.employee_id)); 
		const newEmployees = Employees.map((item) => {
			return {
				"employee_id": item.employee_id,
				"name": item.firstname_en + ' ' + item.lastname_en,
				"email": item.email,
				"telephone": item.mobile_no,
				"company": MultiSelectCompany.selectedOptionValues,
				"department": MultiSelectDepartment.selectedOptionValues,
			}
		})

		const mergeArray = curentEmployees ? curentEmployees.concat(newEmployees) : newEmployees;
		await	selectServices.updateSelectOption(mergeArray);
		storeValue('editEmployeeListAdminManagement',mergeArray);
		// await get_my_team.data.forEach(item => {
		// const isAlreadyPresent = appsmith.store.editEmployeeListAdminManagement.find(existingEmployee => existingEmployee.employee_id === item.employee_id);
		// if (!isAlreadyPresent) {
		// newSelectOptions.push(item);
		// }
		// })		
	},
	deleteEmployee: (thisEmployee) => {
		const result = appsmith.store.editEmployeeListAdminManagement.filter(item => item.employee_id!==thisEmployee.employee_id )
		selectServices.updateSelectOption(result)
		storeValue('editEmployeeListAdminManagement',result)
	},
	handleSubmit: async () => { 
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		const employeeList = appsmith.store.editEmployeeListAdminManagement;
		await delete_admin_to_company.run();
		await delete_admin_to_department.run();
		await delete_admins.run();
		for(let i=0;i < employeeList.length;i++){
			await insert_admins.run({'employee_id': employeeList[i].employee_id})
			await get_admin_last_id.run();
			for(let j=0;j < employeeList[i].company.length;j++){
				await insert_admins_to_company.run({'admin_id': get_admin_last_id.data[0].admin_id,'company_id':employeeList[i].company[j]})
			}
			for(let k=0;k < employeeList[i].department.length;k++){
				await insert_admins_to_department.run({'admin_id': get_admin_last_id.data[0].admin_id,'department_id':employeeList[i].department[k]})
			}

		}
		storeValue('default_assign_tab','kpi_group_list')
		showAlert('Update admin success','success');
		navigateTo('SystemSetting', {'SystemSettingButton': 'Administrator'}, 'SAME_WINDOW');
	}
}