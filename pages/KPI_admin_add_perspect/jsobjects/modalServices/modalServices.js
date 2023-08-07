export default {
	openModal: (thisData) => {
		const transformData ={ 
			...thisData,
		department: {
			label: thisData.department, 
			value: thisData.department
		}, 
			"Division": {
			label: thisData["division"], 
			value: thisData["division"]
			}	
		}
		console.log('thisData',thisData)
				console.log('transformData',transformData)

		storeValue('editModalDetails',transformData)
	},
	closeModal: () => {
		//storeValue('editModalDetails',[])
	},
	editWeight: async () => {
		const id = appsmith.store.editModalDetails.id
			let currentPerspectiveWeight = appsmith.store.perspectiveWeight;
			const indexOfEditData = currentPerspectiveWeight.findIndex(item => item.id === id)	
			await get_department_info.run({'department_id':SelectDepartmentEdit.selectedOptionValue});
			await get_division_info.run({'division_id':SelectDivisionEdit.selectedOptionValue});
			currentPerspectiveWeight[indexOfEditData] = {
				id,
				departmentid: SelectDepartmentEdit.selectedOptionValue, 
				department: get_department_info.data[0].department_name, 
				divisionid: SelectDivisionEdit.selectedOptionValue,
				division: get_division_info.data[0].department_name,
				profitability:InputProfitabilityEdit.inputText.trim(), 
				resource_performance:InputResourceEdit.text.trim(), 
				strategic_conformance_rating: InputStrategicEdit.text.trim()
			}
		let divisionData = []
		for(let i=0; i<currentPerspectiveWeight.length; i++ ){
			divisionData.push(currentPerspectiveWeight[i]["division"])
		}
		const dupResult =	helpers.saveSimilarStrings(divisionData)
		storeValue('duplicateData',dupResult)
			storeValue('perspectiveWeight',currentPerspectiveWeight)
			this.closeModal();
		}
}