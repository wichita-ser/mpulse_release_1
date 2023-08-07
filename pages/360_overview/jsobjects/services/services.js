export default {
	getSelectedEmployee:() => { //fetch data from the back-end
		return appsmith.store.submitSelectedEmployee.map(item => {
				return {
					...item,
					status: "Complete"
				}
			} 
				)
	},
	getMyEmployee: () => {
		return data.myEmployee.map(item => {
			return{
				id:item.id,
				staffName:item.name, 
				status:item.status,
				noEmp:item.evaluator?.length,
				evaluator: item.evaluator
			}
		})
	}, 
	setMyEmployeeEvaluatorDetails: async(myEmployeeDetails) => {
		const newSelectOptions = []
		const currentData = myEmployeeDetails
		await	data.employee.forEach(item => {
					const isAlreadyPresent = currentData.some(existingEmployee => existingEmployee.id === item.id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		storeValue('selectOptions',newSelectOptions)
		storeValue('selectedMyEmployeeDetail',myEmployeeDetails)
	}, 
}