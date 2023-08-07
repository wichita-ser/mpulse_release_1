export default {
	 transformCoporateKPI (data) {
		return data.map(item => {
			 return {
			"Perspective": item["perspective"]? item["perspective"] : "-", 
			"Corporate KPI": item["corporate_kpi"]? item["corporate_kpi"] : "-", 
			"Target": item["target"]?  item["target"]: "-", 
			"Measurements": item["measurements"]? item["measurements"] : "-",
			
			 }
		})
	},
	transformDepartmentKPI (data) {
		return data.map(item => {
			 return {
			"Perspective": item["perspective"]? item["perspective"] : "-", 
			"Department KPI": item["department_kpi"]? item["department_kpi"] : "-", 
			"Target": item["target"]?  item["target"]: "-", 
			"Measurements": item["measurements"],
			"Score1 (Below, <90%)": item["score_1"]? item["score_1"] : "-", 
			"Score2 (Partially Meet, 90-99%)": item["score_2"]? item["score_2"] : "-", 
			"Score3 (Meet, 100%)": item["score_3"]? item["score_3"] : "-", 
			"Score4 (Exceed,101-110%)": item["score_4"]? item["score_4"] : "-", 
			"Score5 (Outstanding, 111-120%)": item["score_5"]? item["score_5"] : "-", 
			"Weight": item["weight"]? item["weight"] : "-", 
			"Status": "Approve"
			 }
		})
	}
}