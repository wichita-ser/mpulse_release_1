export default {
	openModalEdit (data) {
		storeValue('editModalDetail',data);
		showModal('Modal1');
	},
	editData: async () => {
		const employee = appsmith.store.editModalDetail;
		
		const curentList = appsmith.store.editEmployeeListAdminManagement;
		const indexOfEditData = curentList.findIndex(item => item.id === employee.id);
		curentList[indexOfEditData] = {
					"id": employee.id,
					"employee_id": employee.employee_id,
					"name": employee.name,
					"email": employee.email,
					"telephone": employee.mobile_no,
					"company": MultiSelectEditComp.selectedOptionValues,
					"department": MultiSelectEditDep.selectedOptionValues
		}
		storeValue('editEmployeeListAdminManagement',curentList);
		closeModal('Modal1');
	}
}