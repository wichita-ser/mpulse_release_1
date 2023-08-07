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
		return page==appsmith.store.selfEvaluateIndividual.dataEvaluateDetailKPI.length ? true:false
		
	},
	disabledSubmit: () => {
		if(appsmith.store.selfEvaluateIndividual.status==='Submitted' && this.checkSumChoice(appsmith.store.selfEvaluateIndividual.current_choice+1)){
			return true;
		} else if(!RadioGroupScore.selectedOptionValue){
			return true;
		} else {
			return false;
		}
	}
	
}