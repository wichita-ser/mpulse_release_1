export default {	
	openModalAction: (data) => {
		storeValue('editModalDetails',data);
		selectServices.checkAutoEvaluateEdit();
		showModal('EditModal');
	},
	editData: () => {
		const id = appsmith.store.editModalDetails.id
		const curentList = appsmith.store.assignDepartmentKPIList;
		const indexOfEditData = curentList.findIndex(item => item.id === id)
			curentList[indexOfEditData] = {
				id,
				"Department KPI":SelectDepartmentKPIEdit.selectedOptionValue ,
				"Target": InputTargetEdit.inputText ,
				"Measurements": InputMeasurementsEdit.inputText,
				"Score1" : InputScore1Edit.inputText,
				"Score2" : InputScore2Edit.inputText,
				"Score3" : InputScore3Edit.inputText,
				"Score4" : InputScore4Edit.inputText,
				"Score5" : InputScore5Edit.inputText,
				"Weight": InputWeightEdit.inputText
				}
			storeValue('assignDepartmentKPIList',curentList)
		
		}
}