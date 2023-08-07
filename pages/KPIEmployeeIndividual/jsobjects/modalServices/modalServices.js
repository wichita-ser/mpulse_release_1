export default {
	openModalAction: (data) => {
		storeValue('editModalDetails',data);
		selectServices.checkAutoEvaluateEdit();
		showModal('ModalEdit');
	},
	editData: () => {
		const id = appsmith.store.editModalDetails.id;
		const curentList = appsmith.store.performanceIndicatorList;
		const indexOfEditData = curentList.findIndex(item => item.id === id)
		const transformData = {
							"id": id,
							"Perspective":SelectPerspectiveEdit.selectedOptionValue ,
							"Individual KPI": SwitchDepartmentEdit.isSwitchedOn? SelectDepartmentEdit.selectedOptionValue : InputOwnKPIEdit.inputText,
							"Target":  InputTargetEdit.inputText ,
							"Measurements": InputMeasurementEdit.inputText ,
							// "Score Measurements":helpers.transformScore( [InputScore1Edit.inputText, InputScore2Edit.inputText,InputScore3Edit.inputText, InputScore4Edit.inputText,InputScore5Edit.inputText]) ,
							// "Score Measurements value": [InputScore1Edit.inputText, InputScore2Edit.inputText,InputScore3Edit.inputText, InputScore4Edit.inputText,InputScore5Edit.inputText] ,
							"Score1" : InputScore1Edit.inputText,
							"Score2" : InputScore2Edit.inputText,
							"Score3" : InputScore3Edit.inputText,
							"Score4" : InputScore4Edit.inputText,
							"Score5" : InputScore5Edit.inputText,
							"Weight": InputWeightEdit.inputText,
							"isSwitchDepartment": SwitchDepartmentEdit.isSwitchedOn
				}
			curentList[indexOfEditData] = transformData
			storeValue('performanceIndicatorList',curentList)
		}
}