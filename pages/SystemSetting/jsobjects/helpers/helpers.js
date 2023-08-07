export default {
	 // transformSettingData:(data) => {
		// return {
		// supGoalSetting:{
			// startDate: moment(data.endDate).format('DD/MMMM/YYYY'), 
			// endDate: SupGoalSettingEnd.selectedDate
		// }, 
		// employeeGoalSetting: {
			// startDate: EmGoalSettingStart.selectedDate, 
			// endDate: EmGoalSettingEnd.selectedDate
		// }, 
		// emCoreSetting: {
			// startDate: EmCoreSettingStart.selectedDate, 
			// endDate: EmCoreSettingEnd.selectedDate
		// },
		// supCoreSetting: {
			// startDate: SupCoreSettingStart.selectedDate, 
			// endDate: SupCoreSettingEnd.selectedDate
		// },
		// emEvaluation: {
			// startDate: EmEvaluationStart.selectedDate, 
			// endDate: EmEvaluationStartEnd.selectedDate
		// }, 
		// supEvaluation: {
			// startDate: SupEvaluationStart.selectedDate, 
			// endDate: SupEvaluationEnd.selectedDate
		// }
	// }
// }, 
	transformSettingData: (data) => {
	// const result =	Object.keys(data).map(key =>  {
			// return{
				// startDate: moment( data[key].startDate).format('DD/MMMM/YYYY'), 
				// endDate: moment( data[key].endwDate).format('DD/MMMM/YYYY'), 
			// }
		// } )
		// console.log('result',result)
		// return result
		
		const result = Object.keys(data).reduce((obj,key) => {
				obj[key] = { 
					startDate: data[key].startDate ? moment( data[key].startDate).format('DD/MMMM/YYYY') : "-", 
					endDate: data[key].endDate ? moment( data[key].endDate).format('DD/MMMM/YYYY'): "-", 
				}
			return obj
		},{})
		console.log('result',result)
		return result
	}
}