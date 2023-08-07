export default {
		addAssignDepartmentKPI: () => {
			const curentList = appsmith.store.assignEmployeeDepartments;
			const filterDepartment = get_department_kpi_list.data.filter(item => item.department_kpi_id == SelectDepartmentKPI.selectedOptionValue);
			const transformData = {
					"id": helpers.generateRandomID(),
					"Department KPI": filterDepartment[0].department_indicators,
					"Target": InputTarget.inputText ,
					"Measurements": InputMeasurement.inputText,
					"Score1" : InputScore1.inputText,
					"Score2" : InputScore2.inputText,
					"Score3" : InputScore3.inputText,
					"Score4" : InputScore4.inputText,
					"Score5" : InputScore5.inputText,
					"Weight": InputWeight.inputText
				}
			appsmith.store.addEmployeeDepartments.push(
				{
					"department_kpi_id": Number(SelectDepartmentKPI.selectedOptionValue),
					"measurements": InputMeasurement.inputText,
					"perspective_id":filterDepartment[0].perspective_id,
					"score1": InputScore1.inputText,
					"score2": InputScore2.inputText,
					"score3": InputScore3.inputText,
					"score4": InputScore4.inputText,
					"score5": InputScore5.inputText,
					"target": InputTarget.inputText ,
					"weight": Number(InputWeight.inputText)
				}
			)
			const mergeArray = curentList ? curentList.concat(transformData) : transformData;
			services.handleReset()
			storeValue('assignEmployeeDepartments',mergeArray);
	},
		deleteAssigmDepartmentKPI: (thisData) => {
			let curentList = appsmith.store.assignEmployeeDepartments;
			const indexOfRemovedData = curentList.findIndex(item => item.id === thisData.id);
			curentList.splice(indexOfRemovedData,1);
			storeValue('assignEmployeeDepartments',curentList);
			if(!isNaN(thisData.id)){
				appsmith.store.deleteEmployeeDepartments.push(thisData.id);
			}
	},
	isRequirement () {
		if(SelectDepartmentKPI.selectedOptionValue && InputTarget.text && InputMeasurement.text && InputWeight.text) {
			return false;
		} else {
			return true;
		}
	}
	
}