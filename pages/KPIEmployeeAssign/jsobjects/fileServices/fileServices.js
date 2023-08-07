export default {
	handleFile : () => {
		const fileData = FilePicker.files[0].data; 
		const requiredColumnName = ["Department KPI",	"Target", "Measurement" ,	"Weight", "Score1", "Score2", "Score3", "Score4", "Score5"];
		//,"EmployeeID"
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
			// const checkIsAuto = this.checkAutoEvaluateUpload(item["Department KPI"]);
			return{
				"id": helpers.generateRandomID(),
				"Department KPI":item["Department KPI"],
				"Target": item["Target"],
				"Measurements": item["Measurement"],
				"Score1" : item["Score1"],
				"Score2" : item["Score2"],
				"Score3" : item["Score3"],
				"Score4" : item["Score4"],
				"Score5" : item["Score5"],
				"Weight":  item["Weight"],
			}})
			// return{
				// "id": helpers.generateRandomID(),
				// "Department KPI":item["Department KPI"],
				// "Target": checkIsAuto ? item["Target"]:'',
				// "Measurements": checkIsAuto ? item["Measurement"]:'',
				// "Score1" : checkIsAuto ? item["Score1"]:'',
				// "Score2" : checkIsAuto ? item["Score2"]:'',
				// "Score3" : checkIsAuto ? item["Score3"]:'',
				// "Score4" : checkIsAuto ? item["Score4"]:'',
				// "Score5" : checkIsAuto ? item["Score5"]:'',
				// "Weight":  item["Weight"]
			// }})
		const currentData = appsmith.store.assignDepartmentKPIList;
		const final = [...currentData,...transformData]
		showAlert("Upload file success","success")
		storeValue('assignDepartmentKPIList',final)
		resetWidget("FilePicker",true);
	},
	checkAutoEvaluateUpload: (data) => {
		const checkIsAuto = get_department_kpi_list.data.filter((item) => item.department_indicators == data)
		if(checkIsAuto.length>0){
			if(checkIsAuto[0].auto_eva_from !== ''){
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}


	}
}