export default {
	handleFile : () => {
		const fileData = FilePicker.files[0].data; 
		const requiredColumnName = ["Department KPI","EmployeeID",	"Target", "Measurements" ,	"Weight", "Score1", "Score2", "Score3", "Score4", "Score5"];
		const csvColumnName = Object.keys(fileData[0]);
		const isCorrectCSVTemplate = csvColumnName.every((item) => requiredColumnName.includes(item)) && csvColumnName.length === requiredColumnName.length
		if(!isCorrectCSVTemplate){
			showModal('ErrorModal');
			return;
		}
			const removeNullRow =  fileData.filter((item) => 											 {
					if((Object.keys(item).every((objKey) => requiredColumnName.includes(objKey)) && Object.keys(item).length === requiredColumnName.length   )   ){
								return true
						 }else{
							return false
						 }
				})
		const transformData =	removeNullRow.map(item => {
			const thisEmployee = data.employee.find(employee => employee.id === item["EmployeeID"])
			return{
						"id": helpers.generateRandomID(),
						"Department KPI":item["Department KPI"],
						"Employee": thisEmployee?.name,
						"EmployeeID":  item["EmployeeID"] ,
						"Target":item["Target"] ,
						"Measurements": item["Measurements"],
						"Score1" : item["Score1"],
						"Score2" :item["Score2"],
						"Score3" : item["Score3"],
						"Score4" : item["Score4"],
						"Score5" :item["Score5"],
						"Weight": item["Weight"]
			}})
		console.log('transformData', transformData)
		const currentData = appsmith.store.assignDepartmentKPIList;
		const final = [...currentData,...transformData]
		showAlert("Upload file success","success")
		storeValue('assignDepartmentKPIList',final)
	}, 
}