export default {
		assignIndividualKPI: async () => {
			const curentList = appsmith.store.performanceIndicatorList;
			const transformData =  {
					"id":helpers.generateRandomID(),
					"Perspective":SelectPeespective.selectedOptionValue ,
					"Department KPI":SelectDepartmentKPI.selectedOptionValue ? SelectDepartmentKPI.selectedOptionValue:InputOwnKPI.inputText.trim() ,
					"Target": InputTarget.inputText ,
					"Measurements": InputMeasurements.inputText,
					"Score1" : InputScore2.inputText,
					"Score2" : InputScore2.inputText,
					"Score3" : InputScore3.inputText,
					"Score4" : InputScore4.inputText,
					"Score5" : InputScore5.inputText,
					"Weight": InputWeight.inputText
			}
			const mergeArray = curentList ? curentList.concat(transformData) : transformData;
			services.handleReset()
			storeValue('checkAutoEvaluate', false);
			storeValue('performanceIndicatorList',mergeArray);
			resetWidget('AddContainer')
	},
			add: async () => {
				const curentList = appsmith.store.performanceIndicatorList; 
				const size = curentList?  curentList.length : 0
				const transformData = {
						"id": size,
						"Perspective":SelectPeespective.selectedOptionValue ,
						"Individual KPI": SwitchDepartment.isSwitchedOn? SelectDepartmentKPI.selectedOptionValue : InputOwnKPI.inputText,
						"Target":  InputTarget.inputText ,
						"Measurements": InputMeasurements.inputText ,
						"Score1" : InputScore1.inputText,
						"Score2" : InputScore2.inputText,
						"Score3" : InputScore3.inputText,
						"Score4" : InputScore4.inputText,
						"Score5" : InputScore5.inputText,
						"Weight": InputWeight.inputText,
						"Status": "Todo", 
						"isSwitchDepartment": SwitchDepartment.isSwitchedOn
			}
			const mergeArray = curentList ? curentList.concat(transformData) : [transformData];
			services.handleReset();
			storeValue('performanceIndicatorList',mergeArray);
	},
		delete: (thisData) => {
			let curentList = appsmith.store.performanceIndicatorList;
			const indexOfRemovedData = curentList.findIndex(item => item.id === thisData.id);
			curentList.splice(indexOfRemovedData,1);
			storeValue('performanceIndicatorList',curentList);
	},
	
}