export default {
	handleSubmit: () => {
		storeValue('default_assign_tab','kpi_group_list')
		showAlert('Save data Success','success');
	},
	openTab: async (employee_id) => {
		storeValue('pmEmployeeId', employee_id)
		await getKPIByEmployeeID.run({'employee_id': appsmith.store.pmEmployeeId})
		storeValue('default_assign_tab', 'emp_kpi_list');
	}
}