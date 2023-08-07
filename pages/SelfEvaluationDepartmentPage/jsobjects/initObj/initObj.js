export default {
	async onPageLoad () {
		storeValue('page',"SelfEvaluationDepartmentPage")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		storeValue('selfEvaluateDepartment', null)
		await get_self_evaluate.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_department_evaluate_detail.run({'kpi_evaluate_id': get_self_evaluate.data[0].kpi_evaluate_id, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
			
			const dataEvaluateDetailKPI = [];
			for(let i=0;i < get_department_evaluate_detail.data.length;i++){
				
				try{
					const { payload } = await get_auto_evaluate.run(
					{ 
						'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id,  
						'kpi_evaluate_detail_id': get_department_evaluate_detail.data[i].detail_id
					});
					
					if(payload.performance_type != ''){
				
						dataEvaluateDetailKPI.push({
							'no': i+1,
							'kpi_evaluate_detail_id': get_department_evaluate_detail.data[i].detail_id,
							'perspective': get_department_evaluate_detail.data[i].perspective,
							'kpi_name': get_department_evaluate_detail.data[i].department_kpi_name ? get_department_evaluate_detail.data[i].department_kpi_name:get_department_evaluate_detail.data[i].individual_kpi_name,
							'target': get_department_evaluate_detail.data[i].target,
							'measurement': get_department_evaluate_detail.data[i].measurement,
							'weight': get_department_evaluate_detail.data[i].weight,
							'score_1': get_department_evaluate_detail.data[i].score_1,
							'score_2': get_department_evaluate_detail.data[i].score_2,
							'score_3': get_department_evaluate_detail.data[i].score_3,
							'score_4': get_department_evaluate_detail.data[i].score_4,
							'score_5': get_department_evaluate_detail.data[i].score_5,
							'auto_eva_from': payload.performance_type,
							'weight_department_kpi': get_department_evaluate_detail.data[i].weight_department_kpi,
							'score': payload.score_no ? payload.score_no:get_department_evaluate_detail.data[i].score ? get_department_evaluate_detail.data[i].score:0,
							'result': get_department_evaluate_detail.data[i].result ? get_department_evaluate_detail.data[i].result: ''
						})

					} else {

						dataEvaluateDetailKPI.push({
							'no': i+1,
							'kpi_evaluate_detail_id': get_department_evaluate_detail.data[i].detail_id,
							'perspective': get_department_evaluate_detail.data[i].perspective,
							'kpi_name': get_department_evaluate_detail.data[i].department_kpi_name ? get_department_evaluate_detail.data[i].department_kpi_name:get_department_evaluate_detail.data[i].individual_kpi_name,
							'target': get_department_evaluate_detail.data[i].target,
							'measurement': get_department_evaluate_detail.data[i].measurement,
							'weight': get_department_evaluate_detail.data[i].weight,
							'score_1': get_department_evaluate_detail.data[i].score_1,
							'score_2': get_department_evaluate_detail.data[i].score_2,
							'score_3': get_department_evaluate_detail.data[i].score_3,
							'score_4': get_department_evaluate_detail.data[i].score_4,
							'score_5': get_department_evaluate_detail.data[i].score_5,
							'auto_eva_from': '',
							'weight_department_kpi': get_department_evaluate_detail.data[i].weight_department_kpi,
							'score': get_department_evaluate_detail.data[i].score ? get_department_evaluate_detail.data[i].score:0,
							'result': get_department_evaluate_detail.data[i].result
						})
					 }
        }catch(error){
					dataEvaluateDetailKPI.push({
							'no': i+1,
							'kpi_evaluate_detail_id': get_department_evaluate_detail.data[i].detail_id,
							'perspective': get_department_evaluate_detail.data[i].perspective,
							'kpi_name': get_department_evaluate_detail.data[i].department_kpi_name ? get_department_evaluate_detail.data[i].department_kpi_name:get_department_evaluate_detail.data[i].individual_kpi_name,
							'target': get_department_evaluate_detail.data[i].target,
							'measurement': get_department_evaluate_detail.data[i].measurement,
							'weight': get_department_evaluate_detail.data[i].weight,
							'score_1': get_department_evaluate_detail.data[i].score_1,
							'score_2': get_department_evaluate_detail.data[i].score_2,
							'score_3': get_department_evaluate_detail.data[i].score_3,
							'score_4': get_department_evaluate_detail.data[i].score_4,
							'score_5': get_department_evaluate_detail.data[i].score_5,
							'auto_eva_from': '',
							'weight_department_kpi': get_department_evaluate_detail.data[i].weight_department_kpi,
							'score': get_department_evaluate_detail.data[i].score ? get_department_evaluate_detail.data[i].score:0,
							'result': get_department_evaluate_detail.data[i].result
						})
        }
				
			}
		
			storeValue('selfEvaluateDepartment', {
				'kpi_evaluate_id': get_self_evaluate.data[0].kpi_evaluate_id,
				'current_choice': 0,
				'dataEvaluateDetailKPI': dataEvaluateDetailKPI,
				'status': get_self_evaluate.data[0].status
			})
			// return appsmith.store.selfEvaluateDepartment.dataEvaluateDetailKPI
		
	}
}