export default {
	evaluate () {
		storeValue('monitorEmp',{
			'company': appsmith.URL.queryParams.company,
			"department": getAllStatusByDivision.data.payload.department,
			"departmentId": get_division_info.data[0].parent_code,
			"division": getAllStatusByDivision.data.payload.division,
			'divisionId': appsmith.URL.queryParams.divisionID,
			"head_name": getAllStatusByDivision.data.payload.head_name,
			"subordinate": table_division_members.triggeredRow
		})
		navigateTo('EvaluationPage')
	},
	pmSetting () {
		storeValue('monitorEmp',{
			'company': appsmith.URL.queryParams.company,
			"department": getAllStatusByDivision.data.payload.department,
			"departmentId": get_division_info.data[0].parent_code,
			"division": getAllStatusByDivision.data.payload.division,
			'divisionId': appsmith.URL.queryParams.divisionID,
			"head_name": getAllStatusByDivision.data.payload.head_name,
			"subordinate": table_division_members.triggeredRow
		})
		navigateTo('PM setting')
	}
}