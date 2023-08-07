export default {
	deleteData: () => {
		const deleteKPI = appsmith.store.deleteDepartment;
		let currentData = appsmith.store.addDepartmentTableData;

		const indexOfRemovedData = currentData.findIndex(item => item.id === departmentKPI_Table.triggeredRow.id)
		currentData.splice(indexOfRemovedData,1)
		storeValue('addDepartmentTableData',currentData)

		if(Number.isInteger(departmentKPI_Table.triggeredRow.id)){
			const deleteDepartment = [...deleteKPI,departmentKPI_Table.triggeredRow]
			storeValue('deleteDepartment',deleteDepartment)
		}

	},
	handleChangeDepartment: (value) => {
		const result = helpers.transformDivisionOptions(value);
		storeValue('divisionOptions', result ? result : []) 	
	},
	handleChangeEditDepartment: (value) => {
		const result = helpers.transformDivisionOptions(value);
		storeValue('divisionEditOptions', result ? result : []) 	
	},
	handleSubmit: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		for(let i=0;i < departmentKPI_Table.tableData.length;i++){
			let dataTable = departmentKPI_Table.tableData[i];
			await get_department_info.run({'department_name': dataTable.Department});
			await get_division_info.run({'department_name': dataTable.Division});
			await get_perspective_info.run({'perspective_name': dataTable.Perspective.trim().toUpperCase()});

			await get_corporate_kpi_info.run({'kpi_name': dataTable['Corporate KPI']});

			if(!Number.isInteger(dataTable.id)){
				await insert_department_kpi.run({'item': dataTable, 'perspective_id': get_perspective_info.data[0].perspective_id, 'corporate_kpi_id': get_corporate_kpi_info.data[0].corporate_kpi_id });
				await get_last_department.run();
				await insert_year_to_department_kpi.run(
					{
						'department_kpi_id': get_last_department.data[0].department_kpi_id,
						'item': dataTable, 
						'department_id': get_department_info.data[0].office_code, 
						'division_id': get_division_info.data[0].office_code
					}
				);

			} else {
				await update_department_kpi.run({'item': dataTable, 'perspective_id': get_perspective_info.data[0].perspective_id, 'corporate_kpi_id': get_corporate_kpi_info.data[0].corporate_kpi_id});
				await update_year_to_department_kpi.run({'item': dataTable, 'department_id': get_department_info.data[0].office_code, 'division_id': get_division_info.data[0].office_code});

			}

		}

		for(let j=0;j < appsmith.store.deleteDepartment.length;j++){
			await delete_year2department.run({'department_kpi_id': appsmith.store.deleteDepartment[j].id});
			await delete_department_kpi.run({'department_kpi_id': appsmith.store.deleteDepartment[j].id});
		}

		showAlert('Update Department KPI success','success');
		removeValue('addDepartmentTableData');
		removeValue('deleteDepartment');
		removeValue('deleteDepartment');
		removeValue('divisionOptions');
		removeValue('divisionEditOptions');
		navigateTo('KPI_Admin', {'tab': 'Department KPI'}, 'SAME_WINDOW');


	}
}