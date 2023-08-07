export default {
	 handleValidateDuration (data) {
		const result = data.some(item => item.status === "Active")
		 console.log('result')
	return result;
	}
}