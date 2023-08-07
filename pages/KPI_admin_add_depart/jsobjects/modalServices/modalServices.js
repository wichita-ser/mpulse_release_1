export default {
	 openModal (data) {
		 console.log('data',data)
		storeValue('editModalDetails',data)
	},
		closeModal: () => {
		storeValue('editModalDetails',[])
	},
	editData: () => {
		const id = appsmith.store.editModalDetails.id
			let currentData = appsmith.store.addDepartmentTableData;
			const indexOfEditData = currentData.findIndex(item => item.id === id)
			currentData[indexOfEditData] = {
			"id":id,
			"Perspective": SelectPerspectiveEdit.selectedOptionValue,
			"Corporate KPI": SelectCorporateKPIEdit.selectedOptionValue,
			"Department KPI": InputDepartmentEdit.inputText,
			"Department": SelectDepartmentEdit.selectedOptionValue,
			"Division" : SelectDivisionEdit.selectedOptionValue,
			"Measurement" : InputMeasurementEdit.inputText, 
			"Score1": InputScore1.inputText,
			"Score2": InputScore2.inputText,
			"Score3": InputScore3.inputText,
			"Score4": InputScore4.inputText,
			"Score5": InputScore5.inputText,
			"Target": InputTargetEdit.inputText,
			"Weight": InputWeightEdit.inputText,
			"Auto Evaluate": SelectAutoEvaluateEdit.selectedOptionValue
				}
			storeValue('addDepartmentTableData',currentData)
			this.closeModal();
		closeModal('EditModal')
		}
}

