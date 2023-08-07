export default {
	async onPageLoad () {
		storeValue('page',"SelfEvaluationIndividualPage")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		storeValue('selfEvaluateIndividual', null);
		await get_self_evaluate.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_individual_evaluate_detail.run({'kpi_evaluate_id': get_self_evaluate.data[0].kpi_evaluate_id, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		if(!appsmith.store.selfEvaluateIndividual) {
			const dataEvaluateDetailKPI = [];
			for(let i=0;i < get_individual_evaluate_detail.data.length;i++){
       	dataEvaluateDetailKPI.push({
					'no': i+1,
					'kpi_evaluate_detail_id': get_individual_evaluate_detail.data[i].detail_id,
					'perspective': get_individual_evaluate_detail.data[i].perspective,
					'kpi_name': get_individual_evaluate_detail.data[i].department_kpi_name ? get_individual_evaluate_detail.data[i].department_kpi_name:get_individual_evaluate_detail.data[i].individual_kpi_name,
					'target': get_individual_evaluate_detail.data[i].target,
					'measurement': get_individual_evaluate_detail.data[i].measurement,
					'weight': get_individual_evaluate_detail.data[i].weight,
					'score_1': get_individual_evaluate_detail.data[i].score_1,
					'score_2': get_individual_evaluate_detail.data[i].score_2,
					'score_3': get_individual_evaluate_detail.data[i].score_3,
					'score_4': get_individual_evaluate_detail.data[i].score_4,
					'score_5': get_individual_evaluate_detail.data[i].score_5,
					'weight_individual_kpi': get_individual_evaluate_detail.data[i].weight_individual_kpi,
					'score': get_individual_evaluate_detail.data[i].score ? get_individual_evaluate_detail.data[i].score:0,
					'result': get_individual_evaluate_detail.data[i].result
				})
       }
			storeValue('selfEvaluateIndividual', {
				'kpi_evaluate_id': get_self_evaluate.data[0].kpi_evaluate_id,
				'current_choice': 0,
				'dataEvaluateDetailKPI': dataEvaluateDetailKPI,
				'status': get_self_evaluate.data[0].status
			})
			
		}
	}
}