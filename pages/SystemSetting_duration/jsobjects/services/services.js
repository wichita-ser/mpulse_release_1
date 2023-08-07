export default {
	editData: (id) => {
		let currentData = appsmith.store.viewAllDurationData
		const settingData = appsmith.store.settingData
		const data = {
			id,
			year: SelectYear.selectedOptionValue,
			round: SelectRound.selectedOptionValue, 
			startDate: SelectStart.selectedDate, 
			endDate: SelectEnd.selectedDate, 
			status: "Active", 
			setting: helpers.transformSettingData()
		}
		const indexOfUpdatedData = currentData.findIndex(item => item.id === id);
		currentData[indexOfUpdatedData] = data;
		storeValue('viewAllDurationData',currentData);
	},
	addData: () => {
		const currentData = appsmith.store.viewAllDurationData ? appsmith.store.viewAllDurationData  : []
		const settingData = appsmith.store.settingData
		const data = {
			id:currentData? currentData.length+1: 0,
			year: SelectYear.selectedOptionValue,
			round: SelectRound.selectedOptionValue, 
			startDate: SelectStart.selectedDate, 
			endDate: SelectEnd.selectedDate, 
			status: "Active", 
			setting: helpers.transformSettingData()
		}
		const result = [...currentData,data];
		storeValue('viewAllDurationData',[...currentData,data]);
	},
	saveData: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		if(appsmith.URL.queryParams.duration_setting_id){
			await update_duration.run();
			showAlert("Save Duration Setting success","success")
			navigateTo('SystemSetting', {'SystemSettingButton': 'Duration'}, 'SAME_WINDOW');
		} else {		
			await check_duration.run()
			if(check_duration.data.length>0){
				showAlert(`Duration setting: ${SelectRound.selectedOptionValue} ${SelectYear.selectedOptionValue} is exist.`,"error");
			}else{
				await create_duration.run();
				await get_employee_list.run();
				await get_last_duration.run();

				for(let i=0;i < get_employee_list.data.length;i++){
					await create_emp_kpi_evaluate.run(
						{
							'duration_setting_id': get_last_duration.data[0].duration_setting_id,
							'weight': this.checkLevel(get_employee_list.data[i].level),
							'employee_id': get_employee_list.data[i].employee_id
						}
					);

					await create_emp_core_value.run(
						{
							'duration_setting_id': get_last_duration.data[0].duration_setting_id,
							'employee_id': get_employee_list.data[i].employee_id
						}
					);

					await create_emp_engagement.run(
						{
							'duration_setting_id': get_last_duration.data[0].duration_setting_id,
							'employee_id': get_employee_list.data[i].employee_id
						}
					);
				}


				if(!appsmith.store.jwt.duration_setting_id){
					storeValue('jwt',  {
						...appsmith.store.jwt,
						'duration_setting_id': get_last_duration.data[0].duration_setting_id,
						'year': get_last_duration.data[0].year,
						'evaluate_round': get_last_duration.data[0].evaluate_round,
						'start_date': get_last_duration.data[0].start_date,
						'end_date': get_last_duration.data[0].end_date,
						'supervisor_goal_setting_start_date': get_last_duration.data[0].supervisor_goal_setting_start_date,
						'supervisor_goal_setting_end_date': get_last_duration.data[0].supervisor_goal_setting_end_date,
						'employee_goal_setting_start_date': get_last_duration.data[0].employee_goal_setting_start_date,
						'employee_goal_setting_end_date': get_last_duration.data[0].employee_goal_setting_end_date,
						'supervisor_core_setting_start_date': get_last_duration.data[0].supervisor_core_setting_start_date,
						'supervisor_core_setting_end_date': get_last_duration.data[0].supervisor_core_setting_end_date,
						'employee_core_setting_start_date': get_last_duration.data[0].employee_core_setting_start_date,
						'employee_core_setting_end_date': get_last_duration.data[0].employee_core_setting_end_date,
						'supervisor_evaluate_setting_start_date': get_last_duration.data[0].supervisor_evaluate_setting_start_date,
						'supervisor_evaluate_setting_end_date': get_last_duration.data[0].supervisor_evaluate_setting_end_date,
						'employee_evaluate_setting_start_date': get_last_duration.data[0].employee_evaluate_setting_start_date,
						'employee_evaluate_setting_end_date': get_last_duration.data[0].employee_evaluate_setting_end_date,
					})
				}

				showAlert("Save Duration Setting success","success")
				navigateTo('SystemSetting', {'SystemSettingButton': 'Duration'}, 'SAME_WINDOW');
			}
		}
	}, 
	checkLevel: (text) => {
		if(text.match(/^[A-E]/i)){
			return {'weight_department_kpi': 100,'weight_individual_kpi': 0};
		} else {
			return {'weight_department_kpi': 30,'weight_individual_kpi': 70};
		}

	}

}