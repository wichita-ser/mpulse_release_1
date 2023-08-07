export default {
	openModalAction: (data) => {
		storeValue('editModalDetails',data)
	},
	editData: () => {
		const id = appsmith.store.editModalDetails.id;
		const curentList = appsmith.store.assignEmployeeIndividual;
		const indexOfEditData = curentList.findIndex(item => item.id === id)
		const transformData = {
							"id": id,
							"Perspective":SelectPerspectiveEdit.selectedOptionValue ,
							"Individual KPI": SwitchDepartmentEdit.isSwitchedOn? SelectDepartmentEdit.selectedOptionValue : InputOwnKPIEdit.inputText,
							"Target":  InputTargetEdit.inputText ,
							"Measurements": InputMeasurementEdit.inputText ,
							"Score1" : InputScore1Edit.inputText,
							"Score2" : InputScore2Edit.inputText,
							"Score3" : InputScore3Edit.inputText,
							"Score4" : InputScore4Edit.inputText,
							"Score5" : InputScore5Edit.inputText,
							"Weight": InputWeightEdit.inputText,
							"isSwitchDepartment": SwitchDepartmentEdit.isSwitchedOn
				}
			curentList[indexOfEditData] = transformData
			storeValue('assignEmployeeIndividual',curentList)
			
			if(!isNaN(id)){
				const filterPerspective = get_perspective.data.filter(item => item.name == SelectPerspectiveEdit.selectedOptionValue);
				const curentUpdateList = appsmith.store.updateEmployeeIndividual;
				const indexOfUpdateData = curentUpdateList.findIndex(item => item.id === id)
				
				if(indexOfUpdateData<0){
					appsmith.store.updateEmployeeIndividual.push(
						{
							id,
							"individual_kpi_name": SwitchDepartmentEdit.isSwitchedOn? SelectDepartmentEdit.selectedOptionValue : InputOwnKPIEdit.inputText,
							"kpi_evaluate_detail_id": id,
							"measurements": InputMeasurementEdit.inputText,
							"perspective_id": filterPerspective[0].perspective_id,
							"score1": InputScore1Edit.inputText,
							"score2": InputScore2Edit.inputText,
							"score3": InputScore3Edit.inputText,
							"score4": InputScore4Edit.inputText,
							"score5": InputScore5Edit.inputText,
							"target": InputTargetEdit.inputText,
							"weight": InputWeightEdit.inputText
						}
					)
				} else {
					curentUpdateList[indexOfUpdateData] = {
							id,
							"individual_kpi_name": SwitchDepartmentEdit.isSwitchedOn? SelectDepartmentEdit.selectedOptionValue : InputOwnKPIEdit.inputText,
							"kpi_evaluate_detail_id": id,
							"measurements": InputMeasurementEdit.inputText,
							"perspective_id": filterPerspective[0].perspective_id,
							"score1": InputScore1Edit.inputText,
							"score2": InputScore2Edit.inputText,
							"score3": InputScore3Edit.inputText,
							"score4": InputScore4Edit.inputText,
							"score5": InputScore5Edit.inputText,
							"target": InputTargetEdit.inputText,
							"weight": InputWeightEdit.inputText
					}
					storeValue('updateEmployeeIndividual',curentUpdateList)
				}

			}
			closeModal('ModalEdit');
		
		}
}