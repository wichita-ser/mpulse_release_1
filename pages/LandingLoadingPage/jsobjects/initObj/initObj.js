export default {
	async validateToken () {
		const validateTokenResult = await validateTokenAPI.run()
		if(validateTokenResult.status !== 200  ){// check the token whether it still valid or not
			const validateRefreshTokenResult = await validateRefreshTokenAPI.run()
			if(validateRefreshTokenResult.status !== 200){// refresh token is invalid, then redirect a user to login page
				showAlert("Your authentication has expired, Please login into the system agian")
				storeValue('token',[]);
				storeValue('refreshToken',[]);
				return false
			}else{ //set new token
				storeValue('token',validateRefreshTokenResult.data);
				return true
			}
		}
	},
	async init () {
		console.log('appsmith.URL.queryParams.test',appsmith.URL.queryParams.test)
		if(appsmith.URL.queryParams.page === "getToken") {
			
		}
		//validate token using page 
		if(!appsmith.store.token || !appsmith.store.refreshToken){
			//navigateTo('Login_PMS')
		}else{
			const validateResult = this.validateToken();
			if(validateResult){
				//navigateTo(appsmith.store.targetPath)
			}else{
				//navigateTo(Login_PMS)
			}
		}
	}
}
