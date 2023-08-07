export default {
	validateSaveButton: () => {
		if(SelectYear.selectedOptionValue=='' || SelectRound.selectedOptionValue=='' || SelectStart.selectedDate=='' || SelectEnd.selectedDate=='' || SupGoalSettingStart.selectedDate=='' || SupGoalSettingEnd.selectedDate=='' || EmGoalSettingStart.selectedDate=='' || EmGoalSettingEnd.selectedDate=='' || EmEvaluationStart.selectedDate=='' || EmEvaluationStartEnd.selectedDate=='' || SupEvaluationStart.selectedDate=='' || SupEvaluationEnd.selectedDate==''){
			return true
		}else{
			return false
		}
	}, 
	validateSubmitButton: () => {
		if(appsmith.store.editEmployeeListAdminManagement.length === 0){
			return true
		}else{
			return false
		}
	}
} 