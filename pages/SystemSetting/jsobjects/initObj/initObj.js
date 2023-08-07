export default {

	init: async () => {
		storeValue('page',"SystemSetting")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		storeValue('isEditDuration',false)
		await get_duration_all.run();
	  await get_admins_list.run();
		
		// await getEmployeeEngagementResult.run();
		try{
			await getEmployeeEngagementResult.run();
			await getDivisionProgressStatus.run();
		}catch(error){
			showAlert(error, 'error')
		}
		
    const newSelectOptions = []
    // const currentData = appsmith.store.editEmployeeListAdminManagement
    // await	data.employee.forEach(item => {
                // const isAlreadyPresent = currentData.some(existingEmployee => existingEmployee.id === item.id);
                // if (!isAlreadyPresent) {
                    // newSelectOptions.push(item);
                // }
        // })
		switchServices.handleSwitch();
    storeValue('selectOptions',newSelectOptions)
    storeValue('editDurationData',[])
    storeValue('settingData',[])
    storeValue('isEditSetting',false)
}
}