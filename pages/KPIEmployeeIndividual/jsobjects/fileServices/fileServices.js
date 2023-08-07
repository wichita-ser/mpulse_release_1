export default {
	handleFile : () => {
		const data = FilePicker.files[0].data; 
		const requiredColumnName = ["Perspective","Individual KPI",	"Target",	"Measurement",	"Score1",	"Score2",	"Score3", "Score4",	"Score5",	"Weight"];
		//,	"Status"
		const csvColumnName = Object.keys(data[0]);
		const isCorrectCSVTemplate = csvColumnName.every((item) => requiredColumnName.includes(item)) && csvColumnName.length === requiredColumnName.length
		if(!isCorrectCSVTemplate){
			showModal('ErrorModal');
			return;
		}
		const removeNullRow =  data.filter((item) => {
			if((Object.keys(item).every((objKey) => requiredColumnName.includes(objKey)) && Object.keys(item).length === requiredColumnName.length   )    ){
				return true
			}else{
				return false
			}
		})

		const transformData =	removeNullRow.map(item => {
			const checkIsAuto = this.checkAutoEvaluateUpload(item["Individual KPI"]);
			return{
				"id": helpers.generateRandomID(),
				"Perspective": item["Perspective"] ,
				"Individual KPI":item["Individual KPI"],
				"Measurements": checkIsAuto ? item["Measurement"]:'',
				"Target": checkIsAuto ? item["Target"]:'',
				"Score1" : checkIsAuto ? item["Score1"]:'',
				"Score2" : checkIsAuto ? item["Score2"]:'',
				"Score3" : checkIsAuto ? item["Score3"]:'',
				"Score4" : checkIsAuto ? item["Score4"]:'',
				"Score5" : checkIsAuto ? item["Score5"]:'',
				"Weight": item["Weight"],
				"isSwitchDepartment": false
			}})
		//"Status": item["Status"], 
		const currentData = appsmith.store.performanceIndicatorList;
		const final = [...currentData,...transformData]
		showAlert("Upload file success","success")
		storeValue('performanceIndicatorList',final)
		resetWidget("FilePicker",true)
	},
	checkAutoEvaluateUpload: (data) => {
		const checkIsAuto = get_department_kpi_list.data.filter((item) => item.department_indicators == data)
		if(checkIsAuto.length>0){
			if(checkIsAuto[0].auto_eva_from !== null){
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}


	} 
}