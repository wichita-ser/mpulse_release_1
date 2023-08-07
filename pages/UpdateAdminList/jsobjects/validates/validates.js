export default {
	validateAddButton: () => {
		if(SelectMember.selectedOptionValues.length === 0){
			return true
		}else{
			if(MultiSelectCompany.selectedOptionValues.length === 0){
				return true
			} else {
				return false
			}
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