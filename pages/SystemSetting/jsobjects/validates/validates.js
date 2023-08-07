export default {
	validateAddButton: (selectedEmployee,) => {
		if(selectedEmployee === 0){
			return true
		}else{
			return false
		}
	}, 
	validateSubmitButton: () => {
		if(appsmith.store.editEmployeeListAdminManagement.length === 0){
			return true
		}else{
			return false
		}
	}
} 