export default {
	color(text) {
		if(text == "Rejected"){
			return 'red';
		} else if(text == "Done" || text == "Submited" || text == "Completed" || text == "Successed"){
			return 'green';
		}
		
		return ''
	},
	checkSumChoice(page) {
		return page==appsmith.store.supEvaluatedKPI.dataEvaluateDetailKPI.length ? true:false
		
	},
	disabledSubmit: () => {
		if(appsmith.store.supEvaluatedKPI.status==='Submitted' && this.checkSumChoice(appsmith.store.supEvaluatedKPI.current_choice+1)){
			return true;
		} else {
			if(RadioGroupScore.selectedOptionValue){
				return false;
			} else {
				return true;
			}
		}
	}
}