export default {
	isEnableButton () {
		if(!RadioGroup1.selectedOptionValue || !RadioGroup2.selectedOptionValue || !RadioGroup3.selectedOptionValue || !RadioGroup4.selectedOptionValue || !RadioGroup5.selectedOptionValue || !RadioGroup6.selectedOptionValue || !RadioGroup7.selectedOptionValue){
			return true;
		}
		
		return false;
	},
	handleSubmit: () => {
		showAlert('Submit data Success','success');
	}
}