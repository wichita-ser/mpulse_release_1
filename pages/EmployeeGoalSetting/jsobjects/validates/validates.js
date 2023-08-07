export default {
	validateAddButton: (selectedMember, date) => {
		if(selectedMember === 0 || !date){
			return true
		}else{
			return false
		}
	}, 
	validateSubmitButton: () => {
		if(appsmith.store.member.length === 0){
			return true
		}else{
			return false
		}
	}
} 