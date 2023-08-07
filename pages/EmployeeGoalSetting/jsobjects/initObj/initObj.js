export default {
		init:async() => {
		storeValue('page',"EmployeeGoalSetting")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		const currentData = appsmith.store.employeeGoalSettingList ?  appsmith.store.employeeGoalSettingList : []
		const newAddedMember = []
		data.employee.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentData.some(existingEmployee => existingEmployee.id === item.id);
					if (!isAlreadyPresent) {
						newAddedMember.push(item);
					}
			})			
			storeValue('avaliableMember',newAddedMember )			
	},
}

