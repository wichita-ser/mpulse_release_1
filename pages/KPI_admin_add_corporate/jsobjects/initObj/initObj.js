export default {

	async init () {
		storeValue('page',"KPI_admin_add_corporate")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		await get_all_corporate_kpi.run();
		await get_perspective_list.run();
		const initData = get_all_corporate_kpi.data.length>0? get_all_corporate_kpi.data : []
		storeValue('coperateDetail',initData)
		storeValue('deleteCorporate',[])
	}
}