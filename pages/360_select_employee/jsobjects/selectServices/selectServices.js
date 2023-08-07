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
		data.employee.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentSelected.some(existingEmployee => existingEmployee.id === item.id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		storeValue('selectOptions', newSelectOptions)
	},
	updateFilterOptions:(currentSelected, filterEmployee) => {
		const newSelectOptions = []
		currentSelected.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = filterEmployee.some(existingEmployee => existingEmployee.id === item.id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		return newSelectOptions
	},
	handleFilter: () => {
	const selectedEmployee = appsmith.store.selectedEmployee;
  const filterEmployee = data.employee.filter(item =>
    item.name.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) ||
    item.nickname.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) ||
    item.nameTH.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) || 
		item.nicknameTH.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) 
		)
	const result = this.updateFilterOptions(filterEmployee,selectedEmployee);
	storeValue('selectOptions', result);		
}

}