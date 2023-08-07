export default {
	async onPageLoad () {
		storeValue('page',"360EvaluateTeamForm")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		await get_core_value.run();
		await get_core_value_detail.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_my_team_info.run();
	}
}