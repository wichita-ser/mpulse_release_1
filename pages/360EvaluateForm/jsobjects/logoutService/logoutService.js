export default {
	async logout () {
			storeValue('page',"KPI_Employee")
	const isLogin = await	validateToken.runValidateToken();
	if(!isLogin){
		return;
	}
		const res = await logoutAPI.run()
		const path = res.payload.logout_uri 
		postWindowMessage({url:path, urlName:"logout"},"window", "*")
	}
}