export default {
	init: async () => {
		storeValue('page',"SystemSetting_duration")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		if(appsmith.URL.queryParams.duration_setting_id){
			await get_duration_info.run();
		}
		
	}
}