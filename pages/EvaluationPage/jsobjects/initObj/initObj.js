export default {
	async onPageLoad () {
		this.isLoading(true);
				storeValue('page',"EvaluationPage")
				const isLogin = await	validateToken.runValidateToken();
				if(!isLogin){
					return;
				}
		await get_self_evaluate.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_core_value.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_engagement.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await getTeamEvaluationStatus.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_my_team.run();
		this.isLoading(false);
		removeValue('isLoading')
	},
	isLoading (value) {
		storeValue('isLoading', value)
	}
}