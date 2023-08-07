export default {
	checkWeight() {
		if((Number(InputDepWeight.text)+Number(InputIndWeight.text)) !== 100){
			return true;
		} else {
			return false;
		}
	}
}