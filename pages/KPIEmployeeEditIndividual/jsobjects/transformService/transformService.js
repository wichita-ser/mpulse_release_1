export default {

	transformSubmit () {
		const tableData = appsmith.store.assignEmployeeIndividual
		console.log('tableData',tableData)
		// {
		// "add_kpi_list": [
		// {
		// "department_kpi_id": 0,
		// "individual_kpi_name": "string",
		// "measurements": "string",
		// "perspective_id": 0,
		// "score1": "string",
		// "score2": "string",
		// "score3": "string",
		// "score4": "string",
		// "score5": "string",
		// "target": "string",
		// "weight": 0
		// }
		// ],
		// "delete_kpi_list": [
		// 0
		// ],
		// "employee_id": "string",
		// "kpi_type": "string",
		// "update_kpi_list": [
		// {
		// "department_kpi_id": 0,
		// "individual_kpi_name": "string",
		// "kpi_evaluate_detail_id": 0,
		// "measurements": "string",
		// "perspective_id": 0,
		// "score1": "string",
		// "score2": "string",
		// "score3": "string",
		// "score4": "string",
		// "score5": "string",
		// "target": "string",
		// "weight": 0
		// }
		// ]
		// }		
	}
}