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
						"Position": item.position_name
					}
				}
		)
},
	transformDataAPI () {
		const employee_ids = [];
		const kpi_list = [];
		const employeeList = appsmith.store.employeeList;
		const indicatorList = appsmith.store.performanceIndicatorList;
	
		for(let i=0;i < employeeList.length;i++){
     	employee_ids.push(employeeList[i]['Employee ID']);
    }
		
		for(let i=0;i < indicatorList.length;i++){
			// const checkDepartment = get_department_kpi_list.data.filter((item) => item.department_indicators == indicatorList[i]['Department KPI']);
			const checkPerspective = get_perspective.data.filter((item) => item.name.toUpperCase() == indicatorList[i]['Perspective'].toUpperCase());
			// if(checkDepartment.length>0){
				kpi_list.push(
					{
						// "department_kpi_id": 0,
						"individual_kpi_name": indicatorList[i]['Department KPI'],
						"measurements": indicatorList[i]['Measurements'].toString(),
						"perspective_id": checkPerspective.length>0 ? checkPerspective[0].perspective_id:0,
						"score1": indicatorList[i]['Score1'] ? indicatorList[i]['Score1'].toString():'',
						"score2": indicatorList[i]['Score2'] ? indicatorList[i]['Score2'].toString():'',
						"score3": indicatorList[i]['Score3'] ? indicatorList[i]['Score3'].toString():'',
						"score4": indicatorList[i]['Score4'] ? indicatorList[i]['Score4'].toString():'',
						"score5": indicatorList[i]['Score5'] ? indicatorList[i]['Score5'].toString():'',
						"target": indicatorList[i]['Target'],
						"weight": Number(this.transformeplaceWeight(indicatorList[i]['Weight']))
					}
				)
			 }
			// }
			const dataReturn = {
				"employee_ids": employee_ids,
				"kpi_list": kpi_list,
				"kpi_type": 'Individual'
			};
		return dataReturn;
		
	},
	transformeplaceWeight (weight) {
		return weight.toString().replace('%','');
	}

}