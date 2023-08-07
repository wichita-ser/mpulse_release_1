export default {
	storeData: (page) => {
		let currentData = appsmith.store.supEvaluatedKPI;
		let currentKPI = appsmith.store.supEvaluatedKPI.dataEvaluateDetailKPI;
		currentKPI[appsmith.store.supEvaluatedKPI.current_choice] = {
			'no': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].no,
			'kpi_evaluate_detail_id':currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].kpi_evaluate_detail_id,
			'perspective': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].perspective,
			'kpi_name': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].kpi_name,
			'target': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].target,
			'measurement': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].measurement,
			'weight': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].weight,
			'score_1': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].score_1,
			'score_2': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].score_2,
			'score_3': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].score_3,
			'score_4': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].score_4,
			'score_5': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].score_5,
			'auto_eva_from': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].auto_eva_from,
			'weight_department_kpi': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].weight_department_kpi,
			'score': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].score,
			'result': currentData.dataEvaluateDetailKPI[appsmith.store.supEvaluatedKPI.current_choice].result,
			'score_from_supervisor': RadioGroupScore.selectedOptionValue,
			'result_from_supervisor': InputResult.text.trim()
		}
		currentData = {
			'kpi_evaluate_id': currentData.kpi_evaluate_id,
			'current_choice': page,
			'dataEvaluateDetailKPI': currentKPI,
			'status': currentData.status
		}
		return currentData;
	},
	handleNext: () => {
		const data = this.storeData(appsmith.store.supEvaluatedKPI.current_choice+1)
		storeValue('supEvaluatedKPI',data)

	},
	handleBack: () => {
		let currentData = appsmith.store.supEvaluatedKPI;
		currentData = {
			'kpi_evaluate_id': currentData.kpi_evaluate_id,
			'current_choice': appsmith.store.supEvaluatedKPI.current_choice-1,
			'dataEvaluateDetailKPI': currentData.dataEvaluateDetailKPI,
			'status': currentData.status
		}
		storeValue('supEvaluatedKPI',currentData)

	},
	handleSubmit: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		const data = await this.storeData(appsmith.store.supEvaluatedKPI.current_choice)
		storeValue('supEvaluatedKPI',data)
		const dataKPI = appsmith.store.supEvaluatedKPI;

		for(let i=0;i < dataKPI.dataEvaluateDetailKPI.length;i++){
			await get_score_detail_submit.run(
				{
					'evaluate_type_id': 1,
					'score': dataKPI.dataEvaluateDetailKPI[i].score_from_supervisor,
				}
			);

			await update_kpi_evaluate_detail.run(
				{
					'kpi_evaluate_detail_id': dataKPI.dataEvaluateDetailKPI[i].kpi_evaluate_detail_id, 
					'score_from_supervisor': get_score_detail_submit.data[0].score, 
					'result_from_supervisor': dataKPI.dataEvaluateDetailKPI[i].result_from_supervisor
				}
			);
		}

		await check_null_evaluate_kpi.run({'kpi_evaluate_id': dataKPI.kpi_evaluate_id, 'kpi_type': appsmith.store.TeamMemberScore.kpi_type==='Department' ? 'Individual':'Department'});
		await get_total_evalute_detail.run();
		if(appsmith.store.TeamMemberScore.kpi_type === 'Department'){
			await update_kpi_evaluate.run(
				{
					'kpi_evaluate_id': dataKPI.kpi_evaluate_id,
					'status': check_null_evaluate_kpi.data[0].total===0 ? 'Submitted':'Pending',
					'total_kpi_from_supervisor': get_total_evalute_detail.data[0].total,
					'text_kpi_total': 'total_department_kpi_from_supervisor',
					'text_kpi_status': 'department_kpi_setting_status',
				}
			);

		} else {
			await update_kpi_evaluate.run(
				{
					'kpi_evaluate_id': dataKPI.kpi_evaluate_id,
					'status': check_null_evaluate_kpi.data[0].total===0 ? 'Submitted':'Pending',
					'total_kpi_from_supervisor': get_total_evalute_detail.data[0].total,
					'text_kpi_total': 'total_individual_kpi_from_supervisor',
					'text_kpi_status': 'individual_kpi_setting_status',
				}
			);
		}
		removeValue('supEvaluatedKPI');
		showAlert('Submit data Success','success');
		closeModal('ModalConfirmSubmit');
		navigateTo('EvaluationEmployeePage', {'employeeId':appsmith.store.TeamMemberScore.employeeId}, 'SAME_WINDOW');
		removeValue('TeamMemberScore');

	}
}