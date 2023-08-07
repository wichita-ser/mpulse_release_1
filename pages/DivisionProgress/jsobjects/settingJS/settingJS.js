export default {
	color(text) {
		if(text == "Rejected"){
			return '#dc2626';
		} else if(text == "Done" || text == "Submitted" || text == "Completed" || text == "Successed"){
			return '#03b365';
		}
		
		return ''
	},
	status(text) {
		if(text){
			return text;
		}
		
		return 'Pending'
	},
	isSubmitted(text) {
		if(text == "Submitted"){
			return true;
		}
		
		return false
	}
}