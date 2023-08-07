export default {

	init: async () => {
		storeValue('page',"UpdateAdminList")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		await get_my_team.run();
		await get_company_list.run();
		await get_department_list.run();
		await get_admins_list.run();
    const newSelectOptions = []
		
			const currentEmployees = get_admins_list.data.map((item) => {
				return {
					"id": item.id,
					"employee_id": item.employee_id,
					"name": item.emp_name,
					"email": item.email,
					"telephone": item.mobile_no,
					"company": item.company,
					"department": item.department ? item.department:[]
				}
			})
		
    await	get_my_team.data.forEach(item => {
                const isAlreadyPresent = get_admins_list.data.some(existingEmployee => existingEmployee.employee_id === item.employee_id);
                if (!isAlreadyPresent) {
                    newSelectOptions.push(item);
                }
        })
    storeValue('selectOptions',newSelectOptions)
    storeValue('editEmployeeListAdminManagement',currentEmployees)
    storeValue('editDurationData',[])
    storeValue('settingData',[])
    storeValue('isEditSetting',false)
}
}