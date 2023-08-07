export default {
	handleFile : () => {
		const currentData = appsmith.store.addDepartmentTableData; 
		const offDivision = currentData.filter(item => item["Division"].toLowerCase() !== SelectDivision.selectedOptionLabel.toLowerCase());
		const inDivision = currentData.filter(item => item["Division"].toLowerCase() === SelectDivision.selectedOptionLabel.toLowerCase());

		const data = appsmith.store.fileData; 

		const transformData = [];
		offDivision.map((item) => {
			transformData.push( item )
		})
		data.map((item) => {
			const checkData = inDivision.filter(item2 => (item["Perspective"] === item2["Perspective"]) && (item["Corporate KPI"] === item2["Corporate KPI"]) && (item["Department KPI"] === item2["Department KPI"]) && (item["Measurement"] === item2["Measurement"]) && (item["Auto Evaluate"] === item2["Auto Evaluate"]) );


			if(checkData.length>0){
				transformData.push( checkData[0] )
			} else {
				transformData.push({...item, id: helpers.generateRandomID()})
			}
		})

		const final = transformData
		let divisionData = []
		for(let i=0; i<final.length; i++ ){
			divisionData.push(final[i]["Division"])
		}
		const dupResult =	helpers.saveSimilarStrings(divisionData)
		showAlert("Upload file success","success")
		resetWidget("FilePicker",true)
		resetWidget("SelectDepartment",true)
		resetWidget("SelectDivision",true)
		storeValue('addDepartmentTableData',final)
		storeValue('duplicateData',dupResult )
		closeModal('WarningModal');
	}, 
}