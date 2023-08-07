export default {
	async loginWithAP () {
		const {auth_uri} = await apLoginAPI.run(); 
		navigateTo('Home');
		//navigateTo("https://reactrouter.com/en/main/hooks/use-params")		
	},
	async login () {
		clearStore()
		await manualLoginAPI.run();
		var data =  MockupJS.dataLogin.filter(function(item) {
			return (item.username == Input1.text || item.email == Input1.text) && item.password == Input2.text;
		});
		if(data.length>0){
			await get_employee_info.run({'email': data[0].email.toLowerCase()});
			const arrUsername = get_employee_info.data[0].email.split("@");
			await get_duration_setting.run();
			await check_admin.run({'employee_id': data[0].employee_id});
			const isAdmin =  check_admin.data[0].total>0 ? true:false
			const isActive = validateDuration.handleValidateDuration( get_duration_setting.data) 
			if(!isActive && !isAdmin){
				showModal('ModalNotice');
				return
			}
			if(get_duration_setting.data.length>0){
				console.log('pass here')
				storeValue('jwt',  {
					'employee_id': get_employee_info.data[0].employee_id,
					'username': arrUsername[0],
					'email': get_employee_info.data[0].email,
					'name': get_employee_info.data[0].firstname_en + ' ' + get_employee_info.data[0].lastname_en,
					'department_id': get_employee_info.data[0].department_id,
					'department_name': get_employee_info.data[0].department_name,
					'division_name': get_employee_info.data[0].division_name,
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
					'token': manualLoginAPI.data.payload.access_token,
					'refreshToken': manualLoginAPI.data.payload.refresh_token
				} )
				if (!isActive && isAdmin){
					navigateTo('SystemSetting', {}, 'SAME_WINDOW')
				}else{
					showAlert('Login Success','success');
					navigateTo('Home', {}, 'SAME_WINDOW')
				}
			} else {//there is no duration
				if(check_admin.data[0].total>0){
					storeValue('jwt',  {
						'employee_id': get_employee_info.data[0].employee_id,
						'username': arrUsername[0],
						'email': get_employee_info.data[0].email,
						'name': get_employee_info.data[0].firstname_en + ' ' + get_employee_info.data[0].lastname_en,
						'department_name': get_employee_info.data[0].department_name,
						'division_name': get_employee_info.data[0].division_name,
						'position': get_employee_info.data[0].position_name,
						'level': get_employee_info.data[0].level,
						'isAdmin': check_admin.data[0].total>0 ? true:false,
						'isSupervisor': get_employee_info.data[0].num_subordinate>0 ? true:false,
						'token': manualLoginAPI.data.payload.access_token,
						'refreshToken': manualLoginAPI.data.payload.refresh_token
					} )
					navigateTo('SystemSetting', {}, 'SAME_WINDOW');
				} else {
					showModal('ModalNotice');
				}
			}



		} else {
			showAlert('Username and Password do not match', 'error');
		}

	}
}