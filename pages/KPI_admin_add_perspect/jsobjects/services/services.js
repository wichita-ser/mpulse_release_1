export default {
	addWeight: async () => {
		const currentPerspectiveWeight = appsmith.store.perspectiveWeight;

		await get_department_info.run({'department_id':SelectDepartment.selectedOptionValue});
		await get_division_info.run({'division_id':SelectDivision.selectedOptionValue});

		const addWeight = {
			"id": helpers.generateRandomID() + '-' + 0,
			"departmentid": SelectDepartment.selectedOptionValue, 
			"department": get_department_info.data[0].office_name, 
			"divisionid": SelectDivision.selectedOptionValue,
			"division": get_division_info.data[0].office_name, 
			"strategic_conformance_rating": InputStrategic.text.trim(), 
			"resource_performance":InputResource.text.trim(),
			"profitability":InputProfitability.inputText.trim()
		};
		const final = [...currentPerspectiveWeight,addWeight]
		let divisionData = []
		for(let i=0; i<final.length; i++ ){
			divisionData.push(final[i]["division"])
		}
		const dupResult =	helpers.saveSimilarStrings(divisionData)
		storeValue('perspectiveWeight',final);
		storeValue('duplicateData',dupResult)
	}, 
	deleteWeight: () => {
		const deletePerspectiveWeight = appsmith.store.deleteWeight;
		let currentPerspectiveWeight = appsmith.store.perspectiveWeight;
		const indexOfRemovedData = currentPerspectiveWeight.findIndex(item => item.id === departmentKPI_Table.triggeredRow.id)
		currentPerspectiveWeight.splice(indexOfRemovedData,1)
		let divisionData = []
		for(let i=0; i<currentPerspectiveWeight.length; i++ ){
			divisionData.push(currentPerspectiveWeight[i]["division"])
		}
		const dupResult =	helpers.saveSimilarStrings(divisionData)
		storeValue('perspectiveWeight',currentPerspectiveWeight)
		storeValue('duplicateData',dupResult)
		if(Number.isInteger(departmentKPI_Table.triggeredRow.id)){
			const deleteWeight = [...deletePerspectiveWeight,departmentKPI_Table.triggeredRow]
			storeValue('deleteWeight',deleteWeight)
		}
	},
	handleChangeDepartment: (value) => {
		const result =  helpers.transformDivisionOptions(value);
		storeValue('divisionOptions', result ? result : []) 	
	},
	handleChangeEditDepartment: (value) => {
		const result =  helpers.transformDivisionOptions(value);
		storeValue('divisionEditOptions', result ? result : []) 	
	}, 
	handleSubmit: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		const perspectiveList = appsmith.store.perspectiveWeight;
		for(let i=0;i < perspectiveList.length;i++){
			const department_info = await search_department_name.run({'department_name':perspectiveList[i].department});
			const division_info = await search_department_name.run({'department_name':perspectiveList[i].division});
			if(!Number.isInteger(perspectiveList[i].id)){
				await insert_setting_weight.run({'department_id': department_info[0].office_code, 'division_id': division_info[0].office_code});
				await get_last_weight.run();
				await insert_weight2per.run({'kpi_setting_weight_id': get_last_weight.data[0].kpi_setting_weight_id, 'perspective_id': 1, 'weight': perspectiveList[i].strategic_conformance_rating});
				await insert_weight2per.run({'kpi_setting_weight_id': get_last_weight.data[0].kpi_setting_weight_id, 'perspective_id': 2, 'weight': perspectiveList[i].resource_performance});
				await insert_weight2per.run({'kpi_setting_weight_id': get_last_weight.data[0].kpi_setting_weight_id, 'perspective_id': 3, 'weight': perspectiveList[i].profitability});
			} else {
				await update_setting_weight.run({'kpi_setting_weight_id': perspectiveList[i].id, 'department_id': department_info[0].office_code, 'division_id': division_info[0].office_code});
				await update_weight2per.run({'kpi_setting_weight_id': perspectiveList[i].id, 'perspective_id': 1, 'weight': perspectiveList[i].strategic_conformance_rating});
				await update_weight2per.run({'kpi_setting_weight_id': perspectiveList[i].id, 'perspective_id': 2, 'weight': perspectiveList[i].resource_performance});
				await update_weight2per.run({'kpi_setting_weight_id': perspectiveList[i].id, 'perspective_id': 3, 'weight': perspectiveList[i].profitability});
			}
		}
		for(let j=0;j < appsmith.store.deleteWeight.length;j++){
			await delete_weight2per.run({'kpi_setting_weight_id': appsmith.store.deleteWeight[j].id});
			await delete_setting_weight.run({'kpi_setting_weight_id': appsmith.store.deleteWeight[j].id});
		}

		showAlert('Submit data Success','success');
		removeValue('perspectiveWeight');
		removeValue('duplicateData');
		removeValue('deleteWeight');
		removeValue('divisionOptions');
		removeValue('divisionEditOptions');
		navigateTo('KPI_Admin', {'tab': 'Perspective weight'}, 'SAME_WINDOW');
	}
}