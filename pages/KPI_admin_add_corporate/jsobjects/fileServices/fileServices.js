export default {
	handleFile : () => {
		const requiredColumnName = ["Corporate KPI", "Perspective", "Measurement", "Target"];
		const data = appsmith.store.fileData
		const removeNullRow =  data.filter((item) => {
					if((Object.keys(item).every((objKey) => requiredColumnName.includes(objKey)) && Object.keys(item).length === requiredColumnName.length   )    ){
						if( Object.values(item).every((value) => value)){
							return true
						}
						return true;
						 }else{
							return false
						 }
				})
		const transformData =	removeNullRow.map(item => {
			return{
				id: helpers.generateRandomID(),
				perspective : item["Perspective"],
				KPI: item["Corporate KPI"],
				measurements: item["Measurement"],
				target: item["Target"]
			}})
		const final =transformData
		showAlert("Upload file success","success")
		storeValue('coperateDetail',final)
	}, 


}