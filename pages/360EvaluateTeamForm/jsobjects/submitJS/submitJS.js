export default {
	isEnableSubmitted () {
		if(get_core_value.data[0].status_from_supervisor==='Submitted'){
			return true;
		}
		
		return false;
	},
	isEnableButton () {
		if((get_core_value.data[0].status_from_supervisor==='Submitted') || (!RadioGroup1.selectedOptionValue || !RadioGroup2.selectedOptionValue || !RadioGroup3.selectedOptionValue || !RadioGroup4.selectedOptionValue || !RadioGroup5.selectedOptionValue || !RadioGroup6.selectedOptionValue || !RadioGroup7.selectedOptionValue)){
			return true;
		}
		
		return false;
	},
	handleSubmit: async () => {
		let sumTotal = [];
		
		await get_score_detail.run(
				{
					'evaluate_type_id': 2,
					'score': RadioGroup1.selectedOptionValue,
				}
			)
		sumTotal.push((get_score_detail.data[0].score*12.5)/100)
		await update_core_value_detail.run({"choice": 1, "score": get_score_detail.data[0].score, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		await get_score_detail.run(
				{
					'evaluate_type_id': 2,
					'score': RadioGroup2.selectedOptionValue,
				}
			)
		sumTotal.push((get_score_detail.data[0].score*12.5)/100)
		await update_core_value_detail.run({"choice": 2, "score": get_score_detail.data[0].score, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		await get_score_detail.run(
				{
					'evaluate_type_id': 2,
					'score': RadioGroup3.selectedOptionValue,
				}
			)
		sumTotal.push((get_score_detail.data[0].score*12.5)/100)
		await update_core_value_detail.run({"choice": 3, "score": get_score_detail.data[0].score, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		await get_score_detail.run(
				{
					'evaluate_type_id': 2,
					'score': RadioGroup4.selectedOptionValue,
				}
			)
		sumTotal.push((get_score_detail.data[0].score*12.5)/100)
		await update_core_value_detail.run({"choice": 4, "score": get_score_detail.data[0].score, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		await get_score_detail.run(
				{
					'evaluate_type_id': 2,
					'score': RadioGroup5.selectedOptionValue,
				}
			)
		sumTotal.push((get_score_detail.data[0].score*12.5)/100)
		await update_core_value_detail.run({"choice": 5, "score": get_score_detail.data[0].score, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		await get_score_detail.run(
				{
					'evaluate_type_id': 2,
					'score': RadioGroup6.selectedOptionValue,
				}
			)
		sumTotal.push((get_score_detail.data[0].score*12.5)/100)
		await update_core_value_detail.run({"choice": 6, "score": get_score_detail.data[0].score, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		await get_score_detail.run(
				{
					'evaluate_type_id': 2,
					'score': RadioGroup7.selectedOptionValue,
				}
			)
		sumTotal.push((get_score_detail.data[0].score*25)/100)
		await update_core_value_detail.run({"choice": 7, "score": get_score_detail.data[0].score, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		await get_total_core_detail.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		await update_core_value.run(
			{
				'totalScore':  this.sumScoreValue(sumTotal)
			}
		);
		showAlert('Submit data Success','success');
		navigateTo('EvaluationEmployeePage', {'employeeId': appsmith.URL.queryParams.employeeId,
	'default_tab': 'Core Value'}, 'SAME_WINDOW');
	},
	sumScoreValue: (sumTotal) => {
		return sumTotal.reduce(function(sumTotal, b) { return sumTotal + b; }, 0);
	}
}