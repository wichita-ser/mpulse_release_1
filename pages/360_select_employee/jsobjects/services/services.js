export default {
		addSelectedEmployee: async (selectedEmployeeId) => {
			storeValue('isAdd',true);
			const curentEmployees = appsmith.store.selectedEmployee;
			const newEmployees = data.employee.filter(item => selectedEmployeeId.includes(item.id)); 
			const mergeArray = curentEmployees ? curentEmployees.concat(newEmployees) : newEmployees;
			selectServices.updateSelectOption(mergeArray);
			storeValue('selectedEmployee',mergeArray);
	},
		deleteSelectedEmployee: (thisEmployee) => {
		let currentSelectedEmployee = appsmith.store.selectedEmployee;
		const indexOfRemovedData = currentSelectedEmployee.findIndex(item => item.id === thisEmployee.id)
		currentSelectedEmployee.splice(indexOfRemovedData,1)
		selectServices.updateSelectOption(currentSelectedEmployee)
		storeValue('selectedEmployee',currentSelectedEmployee)
	},
	handleSubmit: () => { //send selected employee to the back-end
		showAlert('Save data Success','success');
		storeValue('submitSelectedEmployee', appsmith.store.selectedEmployee)
	},
}