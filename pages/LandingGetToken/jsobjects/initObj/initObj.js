export default {
	async init () {
		let res;
		try{
			res = await getTokenAPI.run();
		}catch(error){
			console.log('error in landing refresh page in get token api',error)
			navigateTo('Login_AD')
			return
		}
		const {refresh_token, access_token ,email  } = res.payload
		try{
			await get_employee_info.run({'email': email.toLowerCase()});
			await get_duration_setting.run();
			await check_admin.run({'employee_id': get_employee_info.data[0].employee_id});
		}catch(error){
			console.log('error in landing refresh page run database',error)
			navigateTo('Login_AD')
			return
		}
		const isAdmin = check_admin.data[0].total>0 ? true:false;
		const isNoDuration = get_duration_setting.data.length < 1
		const isActive = validateDuration.handleValidateDuration( get_duration_setting.data) 
		if((!isActive  || isNoDuration) && !isAdmin){
			showModal('ModalNotice');
			return
		}else if(isNoDuration && isAdmin){
			storeValue('jwt',  {
				'employee_id': get_employee_info.data[0].employee_id,
				'email': get_employee_info.data[0].email,
				'name': get_employee_info.data[0].firstname_en + ' ' + get_employee_info.data[0].lastname_en,
				'department_name': get_employee_info.data[0].department_name,
				'division_name': get_employee_info.data[0].division_name,
				'position': get_employee_info.data[0].position_name,
				'level': get_employee_info.data[0].level,
				'isAdmin':isAdmin,
				'isSupervisor': get_employee_info.data[0].num_subordinate>0 ? true:false,
				'token': access_token,
				'refreshToken': refresh_token
			} )
			navigateTo('SystemSetting', {}, 'SAME_WINDOW');
			return
		}
		storeValue('jwt',  {
			'employee_id': get_employee_info.data[0].employee_id,
			'email': get_employee_info.data[0].email,
			'name': get_employee_info.data[0].firstname_en + ' ' + get_employee_info.data[0].lastname_en,
			'department_name': get_employee_info.data[0].department_name,
			'division_name': get_employee_info.data[0].division_name,
			'department_id': get_employee_info.data[0].department_id,
			'division_id': get_employee_info.data[0].division_id,
			'position': get_employee_info.data[0].position_name,
			'level': get_employee_info.data[0].level,
			'duration_setting_id': get_duration_setting.data[0].duration_setting_id,
			'year': get_duration_setting.data[0].year,
			'evaluate_round': get_duration_setting.data[0].evaluate_round,
			'start_date': get_duration_setting.data[0].start_date,
			'end_date': get_duration_setting.data[0].end_date,
			'supervisor_goal_setting_start_date': get_duration_setting.data[0].supervisor_goal_setting_start_date,
			'supervisor_goal_setting_end_date': get_duration_setting.data[0].supervisor_goal_setting_end_date,
			'employee_goal_setting_start_date': get_duration_setting.data[0].employee_goal_setting_start_date,
			'employee_goal_setting_end_date': get_duration_setting.data[0].employee_goal_setting_end_date,
			'supervisor_core_setting_start_date': get_duration_setting.data[0].supervisor_core_setting_start_date,
			'supervisor_core_setting_end_date': get_duration_setting.data[0].supervisor_core_setting_end_date,
			'employee_core_setting_start_date': get_duration_setting.data[0].employee_core_setting_start_date,
			'employee_core_setting_end_date': get_duration_setting.data[0].employee_core_setting_end_date,
			'supervisor_evaluate_setting_start_date': get_duration_setting.data[0].supervisor_evaluate_setting_start_date,
			'supervisor_evaluate_setting_end_date': get_duration_setting.data[0].supervisor_evaluate_setting_end_date,
			'employee_evaluate_setting_start_date': get_duration_setting.data[0].employee_evaluate_setting_start_date,
			'employee_evaluate_setting_end_date': get_duration_setting.data[0].employee_evaluate_setting_end_date,
			'isAdmin': isAdmin,
			'isSupervisor': get_employee_info.data[0].num_subordinate>0 ? true:false,
			'token': access_token, 
			'refreshToken': refresh_token
		} )
		if (!isActive  && isAdmin) {
			navigateTo('SystemSetting', {}, 'SAME_WINDOW')
		}else{
			showAlert('Login Success','success');
			navigateTo('Home', {}, 'SAME_WINDOW')
		}
	}
}
