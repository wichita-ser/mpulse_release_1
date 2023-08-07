export default {
	handleFile : () => {
		const data = FilePicker.files[0].data; 
		const requiredColumnName = ["Perspective","Individual KPI",	"Target",	"Measurements",	"Score1",	"Score2",	"Score3", "Score4",	"Score5",	"Weight",	"Status"];
		const csvColumnName = Object.keys(data[0]);
		const isCorrectCSVTemplate = csvColumnName.every((item) => requiredColumnName.includes(item)) && csvColumnName.length === requiredColumnName.length
		if(!isCorrectCSVTemplate){
			showModal('ErrorModal');
			return;
		}
				const removeNullRow =  data.filter((item) => {
					if((Object.keys(item).every((objKey) => requiredColumnName.includes(objKey)) && Object.keys(item).length === requiredColumnName.length   )    ){
						if( Object.values(item).every((value) => value)){
							return true
						}
						 }else{
							return false
						 }
				})
																					 
		const transformData =	removeNullRow.map(item => {
			return{
						"id": helpers.generateRandomID(),
						"Perspective": item["Perspective"] ,
						"Individual KPI":item["Individual KPI"],
						"Target": item["Target"] ,
						"Measurements": item["Measurements"] ,
						"Score1" :item["Score1"],
						"Score2" :item["Score2"],
						"Score3" :item["Score3"],
						"Score4" : item["Score4"],
						"Score5" : item["Score5"],
						"Weight": item["Weight"],
						"Status": item["Status"], 
						"isSwitchDepartment": true
			}})
		const currentData = appsmith.store.performanceIndicatorList;
		const final = [...currentData,...transformData]
		showAlert("Upload file success","success")
		storeValue('performanceIndicatorList',final)
	}, 
}