export default {
	async init () {
		storeValue('page',"KPI_Employee_weight")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		await getTeamKPIEvaluate.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_corporate_kpi.run();
		await get_department_kpi.run(
			{
				'department_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.departmentId:appsmith.store.jwt.department_id,
				'division_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.divisionId:appsmith.store.jwt.division_id,
			}
		);
	}
}