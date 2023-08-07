export default {
	async init () {
		storeValue('page',"KPI_Admin")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		await get_all_perspective_weight.run();
		await get_all_corporate_kpi.run();
		await get_all_department_kpi.run();
	}
}