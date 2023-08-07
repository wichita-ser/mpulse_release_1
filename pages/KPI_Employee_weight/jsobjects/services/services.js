export default {
	handleSubmit: async () => {
		try{
			await updateKpiWeight.run();
			closeModal('Modal1');
			await getTeamKPIEvaluate.run({'employee_id': appsmith.store.monitorEmp ? appsmith.store.monitorEmp.subordinate.employee_id:appsmith.store.jwt.employee_id});
			showAlert('Update KPI Weight Success.','success');
    }catch(error){
			showAlert('Error Update KPI Weight.','error');
    }
		
	}
}