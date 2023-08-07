export default {

	async init () {
	storeValue('page',"KPIEmployeeAssign")
	const isLogin = await	validateToken.runValidateToken();
	if(!isLogin){
		return;
	}
		await get_my_team.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
		await get_department_kpi_list.run(
			{
				'department_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.departmentId:appsmith.store.jwt.department_id,
				'division_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.divisionId:appsmith.store.jwt.division_id,
			}
		);
		await getTeamMemberByKPIType.run();
		await get_department_kpi.run(
			{
				'department_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.departmentId:appsmith.store.jwt.department_id,
				'division_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.divisionId:appsmith.store.jwt.division_id,
			}
		);
		
		await get_corporate_kpi.run();
		const initEmployeeList = helpers.transformEmployeeData([])
		storeValue('employeeList',initEmployeeList)
		
		const empData = [];
		getTeamMemberByKPIType.data.payload.map(item =>
			empData.push(
				{
					'id': item.employee_id,
					'name': item.employee_name,
					'nickname': item.employee_nickname,
					'team': item.division_name,
					'position_name': item.position
				}
			)
		)
		
		storeValue('selectOptions', empData)
		storeValue("assignDepartmentKPIList", []) 
		storeValue('checkAutoEvaluate', false);
	}
}