export default {
	async loginWithAP () {
		console.log('company is', appsmith.store.company)
		const res = await apLoginAPI.run(); 
		postWindowMessage({url:res.payload.auth_uri, urlName:"login"},"window", "*")
		return;
	},
}