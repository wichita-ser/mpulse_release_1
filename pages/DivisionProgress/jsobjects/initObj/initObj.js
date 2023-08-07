export default {

	init: async () => {
		storeValue('page',"DivisionProgress")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		await getAllStatusByDivision.run();
		await get_division_info.run();
    const newSelectOptions = []
    // const currentData = appsmith.store.editEmployeeListAdminManagement
    // await	data.employee.forEach(item => {
                // const isAlreadyPresent = currentData.some(existingEmployee => existingEmployee.id === item.id);
                // if (!isAlreadyPresent) {
                    // newSelectOptions.push(item);
                // }
        // })
    storeValue('selectOptions',newSelectOptions)
    storeValue('editDurationData',[])
    storeValue('settingData',[])
    storeValue('isEditSetting',false)
}
}