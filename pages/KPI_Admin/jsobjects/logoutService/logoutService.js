export default {
	async logout () {
		const res = await logoutAPI.run()
		const path = res.payload.logout_uri 
		postWindowMessage({url:path, urlName:"logout"},"window", "*")
	}
}