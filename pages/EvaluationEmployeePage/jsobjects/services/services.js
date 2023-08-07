export default {
	handleSubmitCovalue: () => {
				showAlert('Submit data Success','success');
	},
	handleSubmitKPI: () => {
						showAlert('Submit data Success','success');
	},
	gotoEaluateaTeam: (kpi_evaluate_id ,kpi_type) => {
						storeValue('TeamMemberScore', {
							'employeeId':appsmith.URL.queryParams.employeeId,
							'kpi_evaluate_id': kpi_evaluate_id,
							'kpi_type': kpi_type
						})
		navigateTo('SupEvaluationPage', {}, 'SAME_WINDOW')
	}
}