export default {
	dateFunction (dateText) {
		if(dateText){
			return moment(dateText).format('DD/MMMM/YYYY');
		} else {
			return '';
		}
	}
}