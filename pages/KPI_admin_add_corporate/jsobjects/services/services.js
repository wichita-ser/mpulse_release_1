export default {
	addKPI: (perspective, KPI, measurements) => {
		const addCoperate = {
			id: helpers.generateRandomID(),
			perspective,
			KPI,
			measurements,
			target: InputTarget.inputText
		};
		const currentCoperateKPI = appsmith.store.coperateDetail;
		const final = [...currentCoperateKPI,addCoperate]
		storeValue('coperateDetail',final)
	}, 
	deleteKPI: () => {
		const deleteKPI = appsmith.store.deleteCorporate;
		let currentCoperateKPI = appsmith.store.coperateDetail;
		const indexOfRemovedData = currentCoperateKPI.findIndex(item => item.id === departmentKPI_Table.triggeredRow.id)
		currentCoperateKPI.splice(indexOfRemovedData,1)
		storeValue('coperateDetail',currentCoperateKPI)

		if(Number.isInteger(departmentKPI_Table.triggeredRow.id)){
			const deleteCorporate = [...deleteKPI,departmentKPI_Table.triggeredRow]
			storeValue('deleteCorporate',deleteCorporate)
		}
	},
	handleSubmit: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		for(let i=0;i < departmentKPI_Table.tableData.length;i++){
			let dataTable = departmentKPI_Table.tableData[i];
			//let perspective = get_perspective_list.data.find(item => item.name = dataTable.perspective)
			await get_perspective_info.run({'perspective_name': dataTable.perspective});
			if(!Number.isInteger(departmentKPI_Table.tableData[i].id)){
				await insert_corporate_kpi.run({'KPI': dataTable.KPI, 'perspective_id': get_perspective_info.data[0].perspective_id});
				await get_last_corporate.run();
				await insert_year_to_corporate.run({'corporate_kpi_id': get_last_corporate.data[0].corporate_kpi_id,'item': dataTable})
			} else {
				await await update_corporate_kpi.run({'corporate_kpi_id': dataTable.id,'KPI': dataTable.KPI, 'perspective_id': get_perspective_info.data[0].perspective_id});
				await update_year_to_corporate.run({'corporate_kpi_id': dataTable.id,'item': dataTable});

			}
		}

		for(let j=0;j < appsmith.store.deleteCorporate.length;j++){
			await delete_year2corporate.run({'corporate_kpi_id': appsmith.store.deleteCorporate[j].id});
			await delete_kpi_corporate_setting.run({'corporate_kpi_id': appsmith.store.deleteCorporate[j].id});
		}

		showAlert('Update corporate KPI success', 'success');		
		removeValue('coperateDetail');
		removeValue('editModalDetails');
		removeValue('deleteCorporate');
		navigateTo('KPI_Admin', {'tab': 'Corporate KPI'}, 'SAME_WINDOW')
	}
}