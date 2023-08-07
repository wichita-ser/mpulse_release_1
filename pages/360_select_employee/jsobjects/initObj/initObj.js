export default {
init: async () => {
	let newSelectOptions = []
	const selectedEmployee = appsmith.store.submitSelectedEmployee ? appsmith.store.submitSelectedEmployee : [];
	if(selectedEmployee && selectedEmployee.length !== 0 ){
			await	data.employee.forEach(item => {
				const isAlreadyPresent = selectedEmployee.some(existingEmployee => existingEmployee.id === item.id);
				if (!isAlreadyPresent) {
					newSelectOptions.push(item);
				}
			})
			}else{
				newSelectOptions = data.employee;
			}
		storeValue('selectOptions',newSelectOptions)
		storeValue('selectedEmployee', selectedEmployee )
	}
}