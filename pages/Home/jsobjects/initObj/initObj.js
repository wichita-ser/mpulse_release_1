export default {

	async init () {
		storeValue('page',"Home")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
	}
}