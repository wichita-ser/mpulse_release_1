export default {
	validateMaxEvaluators: (amount) => {
			const currentSelectedEvaluators = appsmith.store.selectedEmployee.length;
			if( currentSelectedEvaluators + amount > 8 ){
				return true;
			}else{
				return false;
			}
		},
		validateNoEvaluators: () => {
			if(appsmith.store.selectedEmployee.length === 0){
				return true;
			}else{
				return false;
			}
		},
		validateMinEvaluators: () => {
			if(appsmith.store.selectedEmployee.length < 2){
				return true;
			}else{
				return false;
			}
		},
	
	validateSelectOption: (amount) => {

		if (this.validateMaxEvaluators(amount) && !appsmith.store.isAdd ){
			return true
		}else{
			return false
		}
	},
		validateSubmitButton: () => {
				if(this.validateMinEvaluators() || this.validateNoEvaluators( ) ){
					return true;
				}else{
					return false;
				}
		},
		validateAddEvaluators: (amount) => {
				if(this.validateMaxEvaluators(amount) || this.validateSelectOption(amount) || amount === 0  ){
					return true;
				}else{
					return false;
				}
		}
}