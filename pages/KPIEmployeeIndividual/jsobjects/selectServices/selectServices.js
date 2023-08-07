export default {
transformEmployeeOptions: () => {
		return appsmith.store.selectOptions.map(item => {
			return {
				label: `${item.name} (${item.nickname}) - ${item.team}` ,
				value: item.id
			}
		})
	}, 
	updateSelectOption: (currentSelected) => {
		const newSelectOptions = []
		get_my_team.data.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentSelected.find(existingEmployee => existingEmployee["Employee ID"] === item.id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		storeValue('selectOptions', newSelectOptions)
	},
	updateFilterOptions:(filterEmployee,currentSelected) => {
		const newSelectOptions = []
		filterEmployee.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentSelected.find(existingEmployee => existingEmployee["Employee ID"] === item.id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		return newSelectOptions
	},
	handleFilter: () => {
		if(!get_my_team.isLoading){
			const selectedEmployee = appsmith.store.employeeList;
			const filterEmployee = get_my_team.data.filter(item =>
				item.name.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) ||
				item.nickname.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) ||
				item.nameTH.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) || 
				item.nicknameTH.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) 
				)
			const result = this.updateFilterOptions(filterEmployee,selectedEmployee);
			storeValue('selectOptions', result);
		}
},
	checkAutoEvaluate: () => {
		if(SelectDepartmentKPI.selectedOptionValue) { 
			const checkIsAuto = get_department_kpi_list.data.filter((item) => item.department_indicators == SelectDepartmentKPI.selectedOptionValue)
			if(checkIsAuto[0].auto_eva_from !== null){
				storeValue('dataAutoEvaluate', checkIsAuto[0])
				storeValue('checkAutoEvaluate', true);
			} else {
				storeValue('dataAutoEvaluate', null)
				storeValue('checkAutoEvaluate', false);
			}
		} else {
				storeValue('dataAutoEvaluate', null)
				storeValue('checkAutoEvaluate', false);
		}
		
		
		
	},
	checkAutoEvaluateEdit: () => {
		const checkIsAuto = get_department_kpi_list.data.filter((item) => item.department_indicators == SelectDepartmentEdit.selectedOptionValue)
		
		// if(checkIsAuto[0].auto_eva_from !== null){
			// storeValue('dataAutoEvaluateEdit', checkIsAuto[0])
			// storeValue('checkAutoEvaluateEdit', true);
		// } else {
			// storeValue('dataAutoEvaluateEdit', checkIsAuto[0])
			// storeValue('checkAutoEvaluateEdit', false);
		// }
			storeValue('dataAutoEvaluateEdit', checkIsAuto[0])
			storeValue('checkAutoEvaluateEdit', false);
		
		
	},
	switchOff: () => {
		resetWidget('SelectDepartmentKPI');
		storeValue('checkAutoEvaluate', false);
	},
	checkSumWeight: () => {
		let sumWeight = 0;

		for (let i = 0; i < appsmith.store.performanceIndicatorList.length; i++ ) {
			sumWeight += Number(helpers.transformeplaceWeight(appsmith.store.performanceIndicatorList[i].Weight));
		}
		if(sumWeight===100){
			return true;
		} else {
			return false;
		}
	}

}