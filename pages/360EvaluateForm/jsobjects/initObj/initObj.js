export default {
	async onPageLoad () {
		this.isLoading(true)
		storeValue('page',"360EvaluateForm")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		await get_core_value.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_core_value_detail.run();
		if(get_core_value_detail.data.length == 0) {
			for(let i=1;i <= 7;i++){
       	await create_core_value_detail.run({"choice": i, 'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id})
      }
		await get_core_value_detail.run();
		}
		this.isLoading(false)
		removeValue('isLoading')
	},
	isLoading (status) {
		storeValue('isLoading', status)
	}
}