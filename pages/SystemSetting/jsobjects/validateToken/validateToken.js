export default {
async validateRefreshToken () {			
			try{
				const res  = await validateRefreshTokenAPI.run()
				const jwt = appsmith.store.jwt
				storeValue('jwt',{...jwt, token: res.payload.access_token } );
				return true
       }catch(error){
				console.log('error in validateRefreshToken',error);
				showAlert("Your authentication has expired, Please login into the system agian")
				storeValue('jwt',undefined);
				storeValue('page',"")
				return false
       }
	},
	async validateToken () {
		let validateTokenResult
		try{
			validateTokenResult = await validateTokenAPI.run()
			return true;
		}catch(error){
			console.log('error in validateToken',error)
			const result = 	await this.validateRefreshToken();
			return result;
		}
	},
	async runValidateToken () {
		if(!appsmith.store.jwt && !appsmith.store.jwt?.token && !appsmith.store.jwt?.refreshToken){
			navigateTo('Login_AD')
			return false
		}else{
			const validateResult = await this.validateToken();
			console.log('validateResult',validateResult);
			if(!validateResult){
				navigateTo('Login_AD')
				return false
			}
		}
		return true
	}
}