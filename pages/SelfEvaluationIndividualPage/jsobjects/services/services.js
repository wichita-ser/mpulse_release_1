export default {
	storeData: (page) => {
		let currentData = appsmith.store.selfEvaluateIndividual;
		let currentKPI = appsmith.store.selfEvaluateIndividual.dataEvaluateDetailKPI;
		currentKPI[appsmith.store.selfEvaluateIndividual.current_choice] = {
			'no': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].no,
			'kpi_evaluate_detail_id':currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].kpi_evaluate_detail_id,
			'perspective': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].perspective,
			'kpi_name': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].kpi_name,
			'target': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].target,
			'measurement': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].measurement,
			'weight': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].weight,
			'score_1': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].score_1,
			'score_2': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].score_2,
			'score_3': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].score_3,
			'score_4': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].score_4,
			'score_5': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].score_5,
			'weight_department_kpi': currentData.dataEvaluateDetailKPI[appsmith.store.selfEvaluateIndividual.current_choice].weight_department_kpi,
			'score': RadioGroupScore.selectedOptionValue,
			'result': InputResult.text.trim()
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
		const data = this.storeData(appsmith.store.selfEvaluateIndividual.current_choice+1)
		storeValue('selfEvaluateIndividual',data)

	},
	handleBack: () => {
		let currentData = appsmith.store.selfEvaluateIndividual;
		currentData = {
			'kpi_evaluate_id': currentData.kpi_evaluate_id,
			'current_choice': appsmith.store.selfEvaluateIndividual.current_choice-1,
			'dataEvaluateDetailKPI': currentData.dataEvaluateDetailKPI,
			'status': currentData.status
		}
		storeValue('selfEvaluateIndividual',currentData)

	},
	handleSubmit: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		const data = await this.storeData(appsmith.store.selfEvaluateIndividual.current_choice)
		storeValue('selfEvaluateIndividual',data)
		const dataKPI = appsmith.store.selfEvaluateIndividual;

		for(let i=0;i < dataKPI.dataEvaluateDetailKPI.length;i++){
			await get_score_detail.run(
				{
					'evaluate_type_id': 1,
					'score': dataKPI.dataEvaluateDetailKPI[i].score,
				}
			)

			await update_kpi_evaluate_detail.run(
				{
					'kpi_evaluate_detail_id': dataKPI.dataEvaluateDetailKPI[i].kpi_evaluate_detail_id, 
					'score': get_score_detail.data[0].score, 
					'result': dataKPI.dataEvaluateDetailKPI[i].result
				}
			);
		}

		await get_total_evalute_detail.run();

		await update_kpi_evaluate.run(
			{
				'kpi_evaluate_id': dataKPI.kpi_evaluate_id,
				'total_Individual_kpi': get_total_evalute_detail.data[0].total,
				'status': get_self_evaluate.data[0].total_department_kpi>0 ? 'Submitted':'Pending'
			}
		);
		removeValue('selfEvaluateIndividual');
		showAlert('Submit data Success','success');
		closeModal('ModalConfirmSubmit')
		navigateTo('SelfEvaluationPage', {}, 'SAME_WINDOW');

	}
}