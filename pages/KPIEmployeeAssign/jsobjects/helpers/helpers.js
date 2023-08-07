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
	},
	transformDataAPI: async () => {
		const employee_ids = [];
		const kpi_list = [];
		const employeeList = appsmith.store.employeeList;
		const departmentList = appsmith.store.assignDepartmentKPIList;
		
		for(let i=0;i < employeeList.length;i++){
     	employee_ids.push(employeeList[i]['Employee ID']);
     }
		
			
		for(let i=0;i < departmentList.length;i++){
			await search_department_kpi_name.run(
				{ 
					'department_kpi': departmentList[i]['Department KPI']
				}
			)
			
     	if(search_department_kpi_name.data.length>0){
				kpi_list.push(
					{
						"department_kpi_id": search_department_kpi_name.data.length>0 ? search_department_kpi_name.data[0].department_kpi_id:0,
						//"individual_kpi_name": "",
						"measurements": departmentList[i]['Measurements'].toString(),
						"perspective_id": search_department_kpi_name.data[0].perspective_id,
						"score1": departmentList[i]['Score1'] ? departmentList[i]['Score1'].toString():'',
						"score2": departmentList[i]['Score2'] ? departmentList[i]['Score2'].toString():'',
						"score3": departmentList[i]['Score3'] ? departmentList[i]['Score3'].toString():'',
						"score4": departmentList[i]['Score4'] ? departmentList[i]['Score4'].toString():'',
						"score5": departmentList[i]['Score5'] ? departmentList[i]['Score5'].toString():'',
						"target": departmentList[i]['Target'],
						"weight": Number(this.transformeplaceWeight(departmentList[i]['Weight']))
					}
				)
			 }
			}
			const dataReturn = {
				"employee_ids": employee_ids,
				"kpi_list": kpi_list,
				"kpi_type": 'Department'
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
	 transformEmployeeData:(data) => {
		 if(!data){
			 return []
		 }
	return	data.map(item =>
				{
					return {
					 "Employee ID": item.id, 
						"Name": item.name, 
						"Position": item.position_name, 
						"Team": item.team
					}
				}
		)
},
	transformeplaceWeight (weight) {
		return weight.toString().replace('%','');
	}

}