export default {
	//approve evaluator section 
	transformEmployeeOptions: () => {
		return appsmith.store.selectOptions.map(item => {
			return {
				label: item.name,
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
	
}