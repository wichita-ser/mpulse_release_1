export default {
	async onPageLoad () {
		this.isLoading(true)
		storeValue('page',"EngagementSurvey")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		await get_my_engagement.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_my_engagement_detail.run()
		if(get_my_engagement_detail.data.length == 0) {
			for(let i=1;i <= 23;i++){
				await create_my_engagement_detail.run({"question": i})
			}
			await get_my_engagement_detail.run();
		}
		this.isLoading(false)
		removeValue('isLoading')
	},
	isLoading (status) {
		storeValue('isLoading', status)
	}
}