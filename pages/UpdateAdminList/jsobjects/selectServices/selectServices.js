export default {
transformEmployeeOptions: () => {
		return appsmith.store.selectOptions.map(item => {
			return {
				label: `${item.firstname_en} ${item.lastname_en} (${item.nickname_en}) - ${item.division_name}` ,
				value: item.employee_id
			}
		})
	}, 
	updateSelectOption: async(currentSelected) => {
		// console.log('updateSelectOption',currentSelected)
		const newSelectOptions = []
		await get_my_team.data.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentSelected.find(existingEmployee => existingEmployee.employee_id === item.employee_id);
					if (!isAlreadyPresent) {
						
						newSelectOptions.push(item);
					}
			})
		// console.log('---newSelectOptions---',newSelectOptions)
		storeValue('selectOptions', newSelectOptions)
	},
	updateFilterOptions:(filterEmployee,currentSelected) => {
		// console.log('filterEmployee',filterEmployee) 
		// console.log('currentSelected',currentSelected)
		const newSelectOptions = []
		filterEmployee.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentSelected.find(existingEmployee => existingEmployee.employee_id === item.employee_id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		return newSelectOptions
	},
	handleFilter: () => {
		const selectedEmployee = appsmith.store.editEmployeeListAdminManagement;
		const filterEmployee = get_my_team.data.filter(item =>
			item.firstname_en?.toLowerCase().includes(SelectMember.filterText.toLowerCase()) ||
			item.lastname_en?.toLowerCase().includes(SelectMember.filterText.toLowerCase()) ||
			item.nickname_en?.toLowerCase().includes(SelectMember.filterText.toLowerCase())  ||
			item.firstname_th?.toLowerCase().includes(SelectMember.filterText.toLowerCase()) || 
			item.lastname_th?.toLowerCase().includes(SelectMember.filterText.toLowerCase()) ||
			item.nickname_th?.toLowerCase().includes(SelectMember.filterText.toLowerCase())  
			)
		const result = this.updateFilterOptions(filterEmployee,selectedEmployee);
		// console.log('handleFilter---',result)
		storeValue('selectOptions', result);		
}

}