export default {

	async init () {
		storeValue('page',"KPIEmployeeEditIndividual")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		await get_perspective.run();
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
		
		const perspectiveData = get_perspective.data
		const perspecctiveOptions = helpers.transformPerspectiveData(perspectiveData)
		storeValue('perspecctiveOptions',perspecctiveOptions)
		storeValue("assignEmployeeIndividual", helpers.initTrnsformDataKPI());
		storeValue("addEmployeeIndividual", []);
		storeValue("updateEmployeeIndividual", []);
		storeValue("deleteEmployeeIndividual", []);
	}
}