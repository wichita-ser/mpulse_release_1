export default {
	color(text) {
		if(text == "Rejected"){
			return '#dc2626';
		} else if(text == "Done" || text == "Submitted" || text == "Completed" || text == "Successed"){
			return '#03b365';
		}
		
		return ''
	},
	showDate(date){
		return moment(date).format('DD MMMM YYYY')
	}
}