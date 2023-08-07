export default {
	async onPageLoad () {
		storeValue('page',"SelfEvaluationPage")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		await get_self_evaluate.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_department_evaluate_detail.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_individual_evaluate_detail.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		console.log('get_self_evaluate',get_self_evaluate.data)
		console.log('get_department_evaluate_detail',get_department_evaluate_detail.data)
	}
}