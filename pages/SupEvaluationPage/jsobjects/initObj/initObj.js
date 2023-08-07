export default {
	async onPageLoad () {
		storeValue('page',"SupEvaluationPage")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		storeValue('supEvaluatedKPI', null)
		await get_self_evaluate.run();
		await get_my_team_info.run();
		await get_evaluate_detail.run({'kpi_evaluate_id': get_self_evaluate.data[0].kpi_evaluate_id});
			const dataEvaluateDetailKPI = [];
			for(let i=0;i < get_evaluate_detail.data.length;i++){
				
					const employee_score = await get_score_detail.run({'score': get_evaluate_detail.data[i].score});
					const supervisor_score = await get_score_detail.run({'score': get_evaluate_detail.data[i].score_from_supervisor});
				
				try{
          const { payload } = await get_auto_evaluate.run(
          { 
            'employee_id': get_self_evaluate.data[0].employee_id,  
            'kpi_evaluate_detail_id': get_evaluate_detail.data[i].detail_id
          });
					
					if(payload.performance_type != ''){
						
            dataEvaluateDetailKPI.push({
              'no': i+1,
              'kpi_evaluate_detail_id': get_evaluate_detail.data[i].detail_id,
              'perspective': get_evaluate_detail.data[i].perspective,
              'kpi_name': get_evaluate_detail.data[i].department_kpi_name ? get_evaluate_detail.data[i].department_kpi_name:get_evaluate_detail.data[i].individual_kpi_name,
              'target': get_evaluate_detail.data[i].target,
              'measurement': get_evaluate_detail.data[i].measurement,
              'weight': get_evaluate_detail.data[i].weight,
              'score_1': get_evaluate_detail.data[i].score_1,
              'score_2': get_evaluate_detail.data[i].score_2,
              'score_3': get_evaluate_detail.data[i].score_3,
              'score_4': get_evaluate_detail.data[i].score_4,
              'score_5': get_evaluate_detail.data[i].score_5,
              'auto_eva_from': payload.performance_type,
              'weight_department_kpi': get_evaluate_detail.data[i].weight_department_kpi,
              'score': payload.score_no ? payload.score_no:employee_score.length>0 ? employee_score[0].no:0,
              'result': get_evaluate_detail.data[i].result ? get_evaluate_detail.data[i].result: '',
							'score_from_supervisor': payload.score_no ? payload.score_no:supervisor_score.length>0 ? supervisor_score[0].no:0,
							'result_from_supervisor': get_evaluate_detail.data[i].result_from_supervisor
            })
						
					} else {
						
            dataEvaluateDetailKPI.push({
              'no': i+1,
              'kpi_evaluate_detail_id': get_evaluate_detail.data[i].detail_id,
              'perspective': get_evaluate_detail.data[i].perspective,
              'kpi_name': get_evaluate_detail.data[i].department_kpi_name ? get_evaluate_detail.data[i].department_kpi_name:get_evaluate_detail.data[i].individual_kpi_name,
              'target': get_evaluate_detail.data[i].target,
              'measurement': get_evaluate_detail.data[i].measurement,
              'weight': get_evaluate_detail.data[i].weight,
              'score_1': get_evaluate_detail.data[i].score_1,
              'score_2': get_evaluate_detail.data[i].score_2,
              'score_3': get_evaluate_detail.data[i].score_3,
              'score_4': get_evaluate_detail.data[i].score_4,
              'score_5': get_evaluate_detail.data[i].score_5,
              'auto_eva_from': '',
              'weight_department_kpi': get_evaluate_detail.data[i].weight_department_kpi,
              'score': employee_score.length>0 ? employee_score[0].no:0,
              'result': get_evaluate_detail.data[i].result ? get_evaluate_detail.data[i].result: '',
							'score_from_supervisor': supervisor_score.length>0 ? supervisor_score[0].no:0,
							'result_from_supervisor': get_evaluate_detail.data[i].result_from_supervisor
            })
					}
					
         }catch(error){
            dataEvaluateDetailKPI.push({
              'no': i+1,
              'kpi_evaluate_detail_id': get_evaluate_detail.data[i].detail_id,
              'perspective': get_evaluate_detail.data[i].perspective,
              'kpi_name': get_evaluate_detail.data[i].department_kpi_name ? get_evaluate_detail.data[i].department_kpi_name:get_evaluate_detail.data[i].individual_kpi_name,
              'target': get_evaluate_detail.data[i].target,
              'measurement': get_evaluate_detail.data[i].measurement,
              'weight': get_evaluate_detail.data[i].weight,
              'score_1': get_evaluate_detail.data[i].score_1,
              'score_2': get_evaluate_detail.data[i].score_2,
              'score_3': get_evaluate_detail.data[i].score_3,
              'score_4': get_evaluate_detail.data[i].score_4,
              'score_5': get_evaluate_detail.data[i].score_5,
              'auto_eva_from': '',
              'weight_department_kpi': get_evaluate_detail.data[i].weight_department_kpi,
              'score': employee_score.length>0 ? employee_score[0].no:0,
              'result': get_evaluate_detail.data[i].result ? get_evaluate_detail.data[i].result: '',
							'score_from_supervisor': supervisor_score.length>0 ? supervisor_score[0].no:0,
							'result_from_supervisor': get_evaluate_detail.data[i].result_from_supervisor
            })
         }
				
				
				
       }
			storeValue('supEvaluatedKPI', {
				'kpi_evaluate_id': get_self_evaluate.data[0].kpi_evaluate_id,
				'current_choice': 0,
				'dataEvaluateDetailKPI': dataEvaluateDetailKPI,
				'status': get_self_evaluate.data[0].status_from_supervisor
			})
		
		// return appsmith.store.supEvaluatedKPI
			
		
	}
}