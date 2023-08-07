export default {
updateSelectOption: (currentSelected) => {
		//const currentAddedMember = appsmith.store.employeeGoalSettingList
	//	const mergeArray = currentSelected.concat(currentAddedMember)
		const newSelectOptions = []
		appsmith.store.avaliableMember.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentSelected.some(existingEmployee => existingEmployee.id === item.id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		storeValue('selectOptions', newSelectOptions)
	},
	addSelectedEmployee: async (selectedEmployeeId) => {
			const curentEmployees = appsmith.store.member;
			const newEmployees = data.employee.filter(item => selectedEmployeeId.includes(item.id)); 
			const mergeArray = curentEmployees ? curentEmployees.concat(newEmployees) : newEmployees;
			this.updateSelectOption(mergeArray);
			storeValue('member',mergeArray);
	},
	deleteMember: (thisEmployee) => {
		let currentMember = appsmith.store.member;
		const indexOfRemovedData = currentMember.findIndex(item => item.id === thisEmployee.id)
		currentMember.splice(indexOfRemovedData,1)
		this.updateSelectOption(currentMember)
		storeValue('member',currentMember)
	},
}