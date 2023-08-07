export default {
	 transformSettingData:() => {
		return {
		supGoalSetting:{
			startDate: SupGoalSettingStart.selectedDate, 
			endDate: SupGoalSettingEnd.selectedDate
		}, 
		emGoalSetting: {
			startDate: EmGoalSettingStart.selectedDate, 
			endDate: EmGoalSettingEnd.selectedDate
		}, 
		emCoreSetting: {
			startDate: EmCoreSettingStart.selectedDate, 
			endDate: EmCoreSettingEnd.selectedDate
		},
		supCoreSetting: {
			startDate: SupCoreSettingStart.selectedDate, 
			endDate: SupCoreSettingEnd.selectedDate
		},
		emEvaluation: {
			startDate: EmEvaluationStart.selectedDate, 
			endDate: EmEvaluationStartEnd.selectedDate
		}, 
		supEvaluation: {
			startDate: SupEvaluationStart.selectedDate, 
			endDate: SupEvaluationEnd.selectedDate
		}
	}
}
}