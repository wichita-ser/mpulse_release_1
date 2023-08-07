export default {
	handleReset: () => {
		resetWidget('AddContainer')
	},
	handleSubmit: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		const isValidLogin = await validateToken.runValidateToken();
		if(!isValidLogin){
			return;
		}
		const dataAPI = await helpers.transformDataAPI();

		await updateEmployeeKPIByKPIType.run(
			{
				'employee_id': dataAPI.employee_id,
				'kpi_type': dataAPI.kpi_type,
				'add_kpi_list': dataAPI.add_kpi_list,
				'delete_kpi_list': dataAPI.delete_kpi_list,
				'update_kpi_list': dataAPI.update_kpi_list
			}
		)


		storeValue('default_assign_tab','kpi_group_list')
		showAlert('Save data Success','success');

		removeValue('assignEmployeeIndividual')
		removeValue('addEmployeeIndividual')
		removeValue('updateEmployeeIndividual')
		removeValue('deleteEmployeeIndividual')

		navigateTo('KPI_Employee', {}, 'SAME_WINDOW');

	}
}