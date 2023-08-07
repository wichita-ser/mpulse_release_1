export default {
			add: async () => {
				const curentList = appsmith.store.assignEmployeeIndividual; 
				const filterPerspective = get_perspective.data.filter(item => item.name == SelectPeespective.selectedOptionValue);
				const transformData = {
						"id": helpers.generateRandomID(),
						"Perspective":SelectPeespective.selectedOptionValue ,
						"Individual KPI": SwitchDepartment.isSwitchedOn ? SelectDepartmentKPI.selectedOptionValue : InputOwnKPI.inputText,
						"Target":  InputTarget.inputText ,
						"Measurements": InputMeasurement.inputText ,
						"Score1" : InputScore2.inputText,
						"Score2" : InputScore2.inputText,
						"Score3" : InputScore3.inputText,
						"Score4" : InputScore4.inputText,
						"Score5" : InputScore5.inputText,
						"Weight": InputWeight.inputText,
						"isSwitchDepartment": SwitchDepartment.isSwitchedOn
			}
			appsmith.store.addEmployeeIndividual.push(
				{
					"individual_kpi_name": SwitchDepartment.isSwitchedOn ? SelectDepartmentKPI.selectedOptionValue : InputOwnKPI.inputText,
					"measurements": InputMeasurement.inputText,
					"perspective_id":filterPerspective[0].perspective_id,
					"score1": InputScore1.inputText,
					"score2": InputScore2.inputText,
					"score3": InputScore3.inputText,
					"score4": InputScore4.inputText,
					"score5": InputScore5.inputText,
					"target": InputTarget.inputText ,
					"weight": Number(InputWeight.inputText)
				}
			)
				
			const mergeArray = curentList ? curentList.concat(transformData) : [transformData];
			services.handleReset();
			storeValue('assignEmployeeIndividual',mergeArray);
	},
		delete: (thisData) => {
			let curentList = appsmith.store.assignEmployeeIndividual;
			const indexOfRemovedData = curentList.findIndex(item => item.id === thisData.id);
			curentList.splice(indexOfRemovedData,1);
			storeValue('assignEmployeeIndividual',curentList);
			if(!isNaN(thisData.id)){
				appsmith.store.deleteEmployeeIndividual.push(thisData.id);
			}
	},
	isRequirement () {
		if(InputTarget.text && InputMeasurement.text && InputWeight.text && SelectPeespective.selectedOptionValue) {
			if(SwitchDepartment.isSwitchedOn){
				return SelectDepartmentKPI.selectedOptionValue ? false:true
			} else {
				return InputOwnKPI.inputText ? false:true
			}
			return false;
		} else {
			return true;
		}
	}
}