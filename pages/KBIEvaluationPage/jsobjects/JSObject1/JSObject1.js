export default {
async init () {
	storeValue('page',"KBIEvaluationPage")
	const isLogin = await	validateToken.runValidateToken();
	if(!isLogin){
			return;
	}
	}
}