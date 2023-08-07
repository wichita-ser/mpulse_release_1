export default {
	handleFile : async () => {
		const data = FilePicker.files[0].data; 
		
		const requiredColumnName = ["Department",	"Division",	"Profitability",	"Resource Performance",	"Strategic conformance rating"	];
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
		const isNotCorrectWeight = removeNullRow.some(item => {
			const sum = parseInt(item["Profitability"]) + parseInt(item["Resource Performance"]) + parseInt(item["Strategic conformance rating"])  
		return sum !== 100
		}
			)
		if(isNotCorrectWeight){
			showModal('ErrorWeightModal')
			return
		}
		const transformData =	[];
			
		for(let i=0;i < removeNullRow.length;i++){
			const dataItem = removeNullRow[i];
				const department_info = await search_department_name.run({'department_name':dataItem["Department"]});
				const division_info = await search_department_name.run({'department_name':dataItem["Division"]});
			
			console.log('department_info', department_info);
			console.log('Department', dataItem["Department"]);
			console.log('division_info', division_info);
			console.log('Division', dataItem["Division"]);
			transformData.push(
				{
					id: helpers.generateRandomID(),
					departmentid: department_info[0].company+'-'+department_info[0].office_code, 
					divisionid: division_info[0].office_code, 
					department: dataItem["Department"], 
					division: dataItem["Division"],
					profitability: dataItem["Profitability"], 
					resource_performance: dataItem["Resource Performance"], 
					strategic_conformance_rating: dataItem["Strategic conformance rating"], 
				}
			)
    }
		
		const currentData = appsmith.store.perspectiveWeight?appsmith.store.perspectiveWeight : [] ;
		const final = [...currentData,...transformData]
		console.log(final)
		let divisionData = []
		for(let i=0; i<final.length; i++ ){
			divisionData.push(final[i]["Division"])
		}
		const dupResult =	helpers.saveSimilarStrings(divisionData)
		showAlert("Upload file success","success")
		storeValue('perspectiveWeight',final)
		storeValue('duplicateData',dupResult )
		// resetWidget("FilePicker",true)
	}, 
}