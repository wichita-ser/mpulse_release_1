export default {
	async onLoadPage () {
						storeValue('page',"EvaluationEmployeePage")
	const isLogin = await	validateToken.runValidateToken();
	if(!isLogin){
		return;
	}
		await get_team_member_info.run();
		await get_department_evaluate_detail.run();
		await get_individual_evaluate_detail.run();
		await get_core_value.run();
		await get_team_kpi.run();
		await check_my_evaluator.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		if(check_my_evaluator.data[0].total === 0){
			for(let i=1;i <= 7;i++){
       	await create_core_value_detail.run({"choice": i, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id})
      }
		}
		
		await get_core_value_detail.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
	}
}