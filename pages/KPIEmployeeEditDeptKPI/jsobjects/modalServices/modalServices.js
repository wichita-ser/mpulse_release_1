export default {	
	openModalAction: (data) => {
		storeValue('editModalDetails',data)
		console.log('data',data)
	},
	editData: () => {
		const id = appsmith.store.editModalDetails.id
		const curentList = appsmith.store.assignEmployeeDepartments;
		
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
			storeValue('assignEmployeeDepartments',curentList)
		 
			if(!isNaN(id)){
				const filterDepartment = get_department_kpi_list.data.filter(item => item.department_indicators == SelectDepartmentKPIEdit.selectedOptionValue);
				const curentUpdateList = appsmith.store.updateEmployeeDepartments;
				const indexOfUpdateData = curentUpdateList.findIndex(item => item.id === id)
				
				if(indexOfUpdateData<0){
					appsmith.store.updateEmployeeDepartments.push(
						{
							id,
							"department_kpi_id": filterDepartment[0].department_kpi_id,
							"kpi_evaluate_detail_id": id,
							"measurements": InputMeasurementsEdit.inputText,
							"perspective_id": filterDepartment[0].perspective_id,
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
							"department_kpi_id": filterDepartment[0].department_kpi_id,
							"kpi_evaluate_detail_id": id,
							"measurements": InputMeasurementsEdit.inputText,
							"perspective_id": filterDepartment[0].perspective_id,
							"score1": InputScore1Edit.inputText,
							"score2": InputScore2Edit.inputText,
							"score3": InputScore3Edit.inputText,
							"score4": InputScore4Edit.inputText,
							"score5": InputScore5Edit.inputText,
							"target": InputTargetEdit.inputText,
							"weight": InputWeightEdit.inputText
					}
					storeValue('updateEmployeeDepartments',curentUpdateList)
				}
					
					
			}
		
			closeModal('EditModal');
		}
}