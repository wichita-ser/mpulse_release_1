export default {
	validateCorrectCSV: async () => {
		const data = FilePicker.files[0].data; 
		const requiredColumnName = ["Perspective",	"Corporate KPI",	"Department KPI",	"Measurement",	"Target", "Department", "Division", "Weight", "Score1", "Score2", "Score3", "Score4", "Score5", "Auto Evaluate"];
		const requiredAutoEvaluate = ["",	"CPI",	"NP",	"RBI",	"RUI", "SPI", "STG", "None"];
		let csvColumnName = Object.keys(data[0]);
		
		csvColumnName = csvColumnName.map(item => helpers.convertScore(item))
		
		const isCorrectCSVTemplate = csvColumnName.every(() => {
			if(( this.checkColumn() && csvColumnName.length === requiredColumnName.length)){
				return true
			}else{
				return false
			}
		}
		)
		if(!isCorrectCSVTemplate){
			showModal('ErrorModal');
			return;
		}
		
		for(let i=0;i < data.length;i++){
			const findCorporate = get_corporate_kpi_list.data.filter(item => item.kpi_name.replace() === data[i]["Corporate KPI"])
				if(data[i]["Perspective"]){
					if(findCorporate.length===0){
						showModal('ErrorCorporateModal');
						return;
					}
				}
			
				if(data[i]["Perspective"]){
					if(data[i]["Auto Evaluate"] !== null) {
						const findAutoEvaluate = requiredAutoEvaluate.filter(item => item === data[i]["Auto Evaluate"])
						if(findAutoEvaluate.length===0){
						showModal('ErrorAutoFormModal');
							return;
						}
					}
				}
			
     }
		
		
			let dataTransform = [];
				
			data.map((item) => {
				const dataColumn = Object.entries(item);
				if(dataColumn.length === requiredColumnName.length){
					if(item["Perspective"] !== null){
						dataTransform.push({
							"Perspective": item["Perspective"],
							"Corporate KPI": item["Corporate KPI"],
							"Department KPI": item["Department KPI"],
							"Measurement": item["Measurement"],
							"Target": item["Target"],
							"Department": item["Department"].trim(),
							"Division": item["Division"].trim(),
							"Weight": item["Weight"],
							"Score1": item["Score1"],
							"Score2": item["Score2"],
							"Score3": item["Score3"],
							"Score4": item["Score4"],
							"Score5": item["Score5"],
							"Auto Evaluate": item["Auto Evaluate"]!=="None" ? item["Auto Evaluate"]:'',
							id: helpers.generateRandomID()
						})
					}
				}
			})
		const removeNullRow =  dataTransform;
		
		const isCorrectSelectDivision =	removeNullRow.every(item => {
			return item["Division"] === SelectDivision.selectedOptionLabel
		} )
		
		if(!isCorrectSelectDivision){
			showModal("ErrorDiffDivisionModal")
			return;
		}else{
			storeValue('fileData',removeNullRow)
			showModal("WarningModal")
			return;
		}
	},
	checkColumn: () => {
		const requiredColumnName = ["Perspective",	"Corporate KPI",	"Department KPI",	"Measurement",	"Target", "Department", "Division", "Weight", "Score1", "Score2", "Score3", "Score4", "Score5", "Auto Evaluate"];
		const data = FilePicker.files[0].data; 
		let csvColumnName = Object.keys(data[0]);
		let isColumn = true;
		
		requiredColumnName.map((item) => {
			let checkCulumn = this.filterColumn(item, csvColumnName).length;
			if(checkCulumn===0){
				isColumn = false;
			}
			
		})
		return isColumn;
	},
	filterColumn: (needle, column)  => {
		var query = needle.toLowerCase();
		return column.filter(function(item) {
				return item.toLowerCase().includes(query);
		})
	}
}