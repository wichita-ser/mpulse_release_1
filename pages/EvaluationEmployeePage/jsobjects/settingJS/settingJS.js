export default {
	color(text) {
		if(text == "Rejected"){
			return 'red';
		} else if(text == "Done" || text == "Submited" || text == "Completed" || text == "Successed"){
			return 'green';
		}
		
		return ''
	},
	checkVisibleButton(data) {
		const result = data.filter(item => item.score_from_supervisor === 0);
		return result.length===0 ? true:false;
	},
	checkVisibleCoreButton(data) {
		
		const result = data.filter(item => item.my_score == null || item.my_score == 0);
		return result.length===0 ? true:false;
	},
	calculateTotal () {
		const department_total = get_department_evaluate_detail.data.length>0 ? (get_department_evaluate_detail.data[0].total_department_kpi_from_supervisor*get_team_kpi.data[0].weight_department_kpi)/100:0;
		const individual_total = get_individual_evaluate_detail.data.length>0 ?(get_individual_evaluate_detail.data[0].total_individual_kpi_from_supervisor*get_team_kpi.data[0].weight_individual_kpi)/100:0;
		
		return (department_total+individual_total).toFixed(1);
	}
}