export default {
	async init () {
		storeValue('page',"KPI_admin_add_depart")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		await get_all_department_kpi.run();
		await get_perspective.run();
		await get_department.run();
		await get_perspective_list.run();
		await get_division_list.run();
		await get_corporate_kpi_list.run();
		const departmentData = get_department.data; 
		const perspectiveData = get_perspective.data;
		const departmentOptions = helpers.transformDepartmentData(departmentData)
		const perspectiveOptions = helpers.transformPerspectiveData(perspectiveData)
		storeValue('departmentOptions', departmentOptions )
		storeValue('perspectiveOptions', perspectiveOptions )
		storeValue('addDepartmentTableData', get_all_department_kpi.data.length>0 ? get_all_department_kpi.data:[])
		storeValue('deleteDepartment',[])
	}
}