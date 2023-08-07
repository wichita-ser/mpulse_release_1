export default {
	validatePercentage:(InputProfitability, InputResource, InputStrategic ) => {
		const isEmpty = InputProfitability.inputText === "" && InputResource.inputText === "" && InputStrategic.inputText ===""
		const intPro = parseInt(InputProfitability.inputText) ;
		const intResource = parseInt(InputResource.inputText);
		const intStrategic = parseInt(InputStrategic.inputText);
		const sumAll = intPro + intResource + intStrategic
		if(isEmpty){
			return false 
		}
		else if(sumAll !== 100){
			return true 
		}else{
			return false
		}
	},
	validateAdd: () => {
		if(SelectDepartment.selectedOptionValue.length === 0 || InputProfitability.inputText === "" || InputStrategic.inputText === "" || InputResource.inputText === "" || SwitchUpload.isSwitchedOn || this.validatePercentage(InputProfitability,InputResource,InputStrategic) === true)
			return true; 
		else{departmentKPI_Table.selectedRow
			return false;
		}
	},
	validateEdit: () => {
		const validateError = InputProfitabilityEdit.isValid && InputStrategicEdit.isValid && InputResourceEdit.isValid && SelectDepartmentEdit.isValid &&  SelectDivisionEdit.isValid;
		if(this.validatePercentage(InputProfitabilityEdit,InputResourceEdit,InputStrategicEdit) === true || !validateError ){
			return true; 
		}
		else{
			return false;
		}
	}, 
	validateDuplicateData: (currentRow) => {
		const dupData = appsmith.store.duplicateData; 
		const result = dupData.find(item => item === currentRow["division"])
		if(result){
			return "#dc2626"
		}else{
			return ""
		}
	}
	
}