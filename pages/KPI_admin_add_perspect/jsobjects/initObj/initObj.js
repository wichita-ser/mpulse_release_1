export default {

	async init () {
		storeValue('page',"KPI_admin_add_perspect")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		await get_all_perspective_weight.run();
		const initData = get_all_perspective_weight.data.length ? get_all_perspective_weight.data : [];
		await get_department.run();
		storeValue('perspectiveWeight',initData)
		storeValue('deleteWeight',[])
		storeValue('duplicateData',[])
	}
}