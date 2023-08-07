export default {
	transformScore (score) {
		if(score>0){
			return Number(score).toFixed(1)
		} else {
			return 0;
		}
	}
}