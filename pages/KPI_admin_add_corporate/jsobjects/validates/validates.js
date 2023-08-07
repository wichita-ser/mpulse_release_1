export default {
	validateAdd: () => {
		if(SelectPerspective.selectedOptionValue.length === 0 || InputCorporateKPI.inputText === "" || InputMeasurement.inputText === "" || UploadSwitch.isSwitchedOn)
			return true; 
		else{
			return false;
		}
	},
	isDisableField: () => {
		if( UploadSwitch.isSwitchedOn){
			return true
		}else{
			return false
		}
	},
	validateEdit: () => {
		if(SelectPerspectiveEdit.selectedOptionValue.length === 0 || InputCorporateKPIEdit.inputText === "" || InputMeasurementEdit.inputText === "" )
			return true; 
		else{
			return false;
		}
	},
	validateCorrectCSV: () => {
		const data = FilePicker.files[0].data; 
		const requiredColumnName = ["Corporate KPI", "Perspective", "Measurement", "Target"];
		const csvColumnName = Object.keys(data[0]);
		const isCorrectCSVTemplate = csvColumnName.every((item) => requiredColumnName.includes(item)) && csvColumnName.length === requiredColumnName.length
		if(!isCorrectCSVTemplate){
			showModal('ErrorModal');
			return;
		}else{
			storeValue('fileData',data)
			showModal("WarningModal")
			return;
		}
	}
}