export default {
	handleSubmit: () => { //send selected employee to the back-end
			const curentEmployees = appsmith.store.employeeGoalSettingList;//store array of employees object 
			let newEmployee = []
			appsmith.store.member.forEach(thisNewEmployee => {//can not add the same employee (check new added employee with existing one)
				if(curentEmployees){
					const isAlreadyPresent = curentEmployees.some(existingEmployee => existingEmployee.id === thisNewEmployee.id);
					if (!isAlreadyPresent) {
						newEmployee.push(thisNewEmployee);
					}
				}else{
					newEmployee.push(thisNewEmployee);
				}
  		});
		const final = curentEmployees ? curentEmployees.concat(newEmployee) : newEmployee // merge existing employee with new one
		storeValue('employeeGoalSettingList', final)
		initObj.init();
		storeValue('member', [])
	},
	closeModal: () => {
		storeValue('member', [])
	}
}