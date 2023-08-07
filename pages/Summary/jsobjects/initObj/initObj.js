export default {
	grade (total) {
		let grade = 'D';
		if(total >= 80){
			grade = 'A';
		} else if (total >= 70){
			grade = 'B';
		} else if (total >= 50){
			grade = 'C';
		}
		
		return grade;
	},
	ini: async () => {
		storeValue('page',"Summary")
		const isLogin = await	validateToken.runValidateToken();
		if(!isLogin){
				return;
		}
		await getTeamMember.run();
		await getSummary.run();
		removeValue('subordinateList')
	}
}