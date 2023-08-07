export default {
	async init () {
		storeValue('page',"KPI_Employee")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
			return;
		}
		
		await getTeamKPIEvaluation.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await getTeamKPI.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_corporate_kpi.run();
		await get_department_kpi.run(
			{
				'department_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.departmentId:appsmith.store.jwt.department_id,
				'division_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.divisionId:appsmith.store.jwt.division_id,
			}
		);
		
		if(appsmith.store.pmEmployeeId){
			storeValue('default_assign_tab', 'emp_kpi_list');
			await getKPIByEmployeeID.run({'employee_id': appsmith.store.pmEmployeeId})
		}

		removeValue('departmentKPIModalData');
		removeValue('coporateKPIModalData');
	}
}