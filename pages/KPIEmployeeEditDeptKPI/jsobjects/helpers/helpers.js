export default {
	initTrnsformDataKPI () {
		const dataKPI = [];
		if(getKPIByEmployeeID.data.payload.department_kpis.length>0){
			getKPIByEmployeeID.data.payload.department_kpis.map((item) => {
				dataKPI.push(
					{
						"id": item.kpi_evaluate_detail_id,
						"Department KPI":item.department_kpi,
						"Target": item.target,
						"Measurements": item.measurements,
						"Score1" : item.score_1,
						"Score2" : item.score_2,
						"Score3" : item.score_3,
						"Score4" : item.score_4,
						"Score5" : item.score_5,
						"Weight":  item.weight,
					}
				)
			})
		}
		return dataKPI;
		
	},
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
			"Score1 (Below, <90%)": item["Score1"]? item["Score1"] : "-", 
			"Score2 (Partially Meet, 90-99%)": item["Score2"]? item["Score2"] : "-", 
			"Score3 (Meet, 100%)": item["Score3"]? item["Score3"] : "-", 
			"Score4 (Exceed,101-110%)": item["Score4"]? item["Score4"] : "-", 
			"Score5 (Outstanding, 111-120%)": item["Score5"]? item["Score5"] : "-", 
			"Weight": item["weight"]? item["weight"] : "-", 
			"Status": "Approve"
			 }
		})
	},
	transformDataAPI: async () => {
			const dataUpdate = appsmith.store.updateEmployeeDepartments;
			const add_kpi_list = appsmith.store.addEmployeeDepartments;
			const delete_kpi_list = appsmith.store.deleteEmployeeDepartments;
			const update_kpi_list = [];
			
			dataUpdate.map(item => {
				update_kpi_list.push({
					"department_kpi_id": item.department_kpi_id,
					"kpi_evaluate_detail_id": item.kpi_evaluate_detail_id,
					"measurements": item.measurements,
					"perspective_id": item.perspective_id,
					"score1": item.score1,
					"score2": item.score2,
					"score3": item.score3,
					"score4": item.score4,
					"score5": item.score5,
					"target": item.target,
					"weight": Number(item.weight)
				})
			})
		
			const dataReturn = {
				"employee_id": appsmith.URL.queryParams.employeeId,
				"kpi_type": "Department",
				"add_kpi_list": add_kpi_list,
				"delete_kpi_list": delete_kpi_list,
				"update_kpi_list": update_kpi_list
			};
		return dataReturn;
	},
	 transformScore:(score) =>  {
		return `1 - ${score[0]}, 2 - ${score[1]}, 3 - ${score[2]}, 4 - ${score[3]}, 5 - ${score[4]}`
  },
	 generateRandomID:() => {
 	return [...Array(32)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
	}, 
	transformPerspectiveData: (data) => {
			 if(!data){
			 return []
		 }
    return data.map(item => {
        return{
            "label": item.name, 
            "value":  item.name
        }
    })
},
	transformeplaceWeight (weight) {
		return weight.toString().replace('%','');
	}

}