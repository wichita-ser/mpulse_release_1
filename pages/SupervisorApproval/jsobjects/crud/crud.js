export default {
addSelectedEmployee: async (selectedEmployeeId) => {
			storeValue('isAdd',true);
			const curentEmployees = appsmith.store.selectedMyEmployeeDetail.evaluator;
			const newEmployees = appsmith.store.newEmployeeList.filter(item => selectedEmployeeId.includes(item.id)); 
			const mergeArray = curentEmployees ? curentEmployees.concat(newEmployees) : newEmployees;
			selectServices.updateSelectOption(mergeArray);
			storeValue('selectedMyEmployeeDetail',{...appsmith.store.selectedMyEmployeeDetail, evaluator: mergeArray});
	},
	deleteSelectedEmployee: (thisEmployee) => {
		let currentSelectedMyEmployeeDetail = appsmith.store.selectedMyEmployeeDetail.evaluator;
		const indexOfRemovedData = currentSelectedMyEmployeeDetail.findIndex(item => item.id === thisEmployee.id)
		currentSelectedMyEmployeeDetail.splice(indexOfRemovedData,1)
		selectServices.updateSelectOption(currentSelectedMyEmployeeDetail)
		storeValue('selectedMyEmployeeDetail',  {...appsmith.store.selectedMyEmployeeDetail, evaluator: currentSelectedMyEmployeeDetail} )
	},
}