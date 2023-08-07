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
	appsmith.store.newEmployeeList.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentSelected.some(existingEmployee => existingEmployee.id === item.id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		storeValue('selectOptions', newSelectOptions)
	},
	
	   updateFilterOptions: (filterEmployee,currentSelected ) => {
          const newSelectOptions = []
          filterEmployee.forEach(item => {//can not add the same employee (check new added employee with existing one)
           const isAlreadyPresent = currentSelected.some(existingEmployee => existingEmployee.id === item.id);
                  if (!isAlreadyPresent) {
                            newSelectOptions.push(item);
                        }
                })
            return newSelectOptions
        },
      handleFilter: () => {
				const currentData = appsmith.store.newEmployeeList
			if(SelectEmployee.filterText !== 0){
      const selectedEmployee = appsmith.store.selectedMyEmployeeDetail.evaluator;
      let filterEmployee = currentData.filter(item =>
        item.name.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) ||
        item.nickname.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) ||
        item.nameTH.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) || 
            item.nicknameTH.toLowerCase().includes(SelectEmployee.filterText.toLowerCase()) 
            )		
        const result =  this.updateFilterOptions(filterEmployee,selectedEmployee);
        storeValue('selectOptions', result);	
			}
				else{
					        storeValue('selectOptions', currentData);	
				}
			
				}
}