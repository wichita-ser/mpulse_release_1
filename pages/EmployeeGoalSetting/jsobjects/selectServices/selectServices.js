export default {
	initSelectOption: async () => {
			// const currentData = appsmith.store.employeeGoalSettingList
				// if(currentData){
						// await	appsmith.store.avaliableMember.forEach(item => {
							// const isAlreadyPresent = currentData.some(existingEmployee => existingEmployee.id === item.id);
							// if (!isAlreadyPresent) {
								// newSelectOptions.push(item);
							// }
					// })
				// }else{
					// newSelectOptions = data.employee
				// }
	//	console.log('data',data.employee)
	//	console.log('newSelectOptions',newSelectOptions)
	await	storeValue('selectOptions',	appsmith.store.avaliableMember)
			if(appsmith.store.member === undefined){
				storeValue('member',[])
			}
	},
	transformEmployeeOptions: () => {
		return appsmith.store.selectOptions.map(item => {
			return {
				label: item.name,
				value: item.id
			}
		})
	}, 
}