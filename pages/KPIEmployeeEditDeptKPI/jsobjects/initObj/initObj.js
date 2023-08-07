export default {
	async init () {
		storeValue('page',"KPIEmployeeEditDeptKPI")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		await getKPIByEmployeeID.run();
		
		await get_department_kpi_list.run(
			{
				'department_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.departmentId:appsmith.store.jwt.department_id,
				'division_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.divisionId:appsmith.store.jwt.division_id,
			}
		);
		
		await get_department_kpi.run(
			{
				'department_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.departmentId:appsmith.store.jwt.department_id,
				'division_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.divisionId:appsmith.store.jwt.division_id,
			}
		);
		
		await get_corporate_kpi.run();
		storeValue("assignEmployeeDepartments", helpers.initTrnsformDataKPI());
		storeValue("addEmployeeDepartments", []);
		storeValue("updateEmployeeDepartments", []);
		storeValue("deleteEmployeeDepartments", []);

	}
}