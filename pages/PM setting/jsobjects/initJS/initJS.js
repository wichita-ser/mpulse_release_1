export default {
	async onLoadPage () {
		this.isLoading(true);
		storeValue('page',"PM setting")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		await getTeamMember.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		
		this.isLoading(false);
		removeValue('isLoading')
	},
	isLoading (value) {
		storeValue('isLoading', value)
	}
	
}