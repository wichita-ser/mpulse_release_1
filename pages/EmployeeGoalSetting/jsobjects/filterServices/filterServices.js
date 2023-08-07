export default {
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
			const currentOptions = appsmith.store.avaliableMember
if(SelectMember.filterText !== 0) {
	console.log('---pass --- condition')
	const selectedEmployee = appsmith.store.member;
  const filterEmployee = currentOptions.filter(item =>
    item.name.toLowerCase().includes(SelectMember.filterText.toLowerCase()) ||
    item.nickname.toLowerCase().includes(SelectMember.filterText.toLowerCase()) ||
    item.nameTH.toLowerCase().includes(SelectMember.filterText.toLowerCase()) || 
		item.nicknameTH.toLowerCase().includes(SelectMember.filterText.toLowerCase()) 
		)
	const result = this.updateFilterOptions(filterEmployee,selectedEmployee);
	storeValue('selectOptions', result);		
	}else{
		storeValue('selectOptions',currentOptions)
	}
}
}