export default {
	isCheckButton () {
		if((get_my_engagement.data[0].status==='Submitted') || (!RadioGroup1.selectedOptionValue || !RadioGroup2.selectedOptionValue || !RadioGroup3.selectedOptionValue || !RadioGroup4.selectedOptionValue || !RadioGroup5.selectedOptionValue || !RadioGroup6.selectedOptionValue || !RadioGroup7.selectedOptionValue || !RadioGroup8.selectedOptionValue || !RadioGroup9.selectedOptionValue || !RadioGroup10.selectedOptionValue || !RadioGroup11.selectedOptionValue || !RadioGroup12.selectedOptionValue || !RadioGroup13.selectedOptionValue || !RadioGroup14.selectedOptionValue || !RadioGroup15.selectedOptionValue || !RadioGroup16.selectedOptionValue || !RadioGroup17.selectedOptionValue || !RadioGroup18.selectedOptionValue || !RadioGroup19.selectedOptionValue || !RadioGroup20.selectedOptionValue || !RadioGroup21.selectedOptionValue || !RadioGroup22.selectedOptionValue || !RadioGroup23.selectedOptionValue)){
			return true;
		}

		return false;
	},
	isEnableButton () {
		if(get_my_engagement.data[0].status==='Submitted' || get_my_engagement_detail.isLoading || appsmith.store.isLoading){
			return true;
		}

		return false;
	},
	handleSubmit: async () => {
		const isNotTokenExpire = await validateToken.runValidateToken();
		if(!isNotTokenExpire){
			return;
		}
		await update_engagement.run();
		await update_engagement_detail.run({"question": 1, "score": RadioGroup1.selectedOptionValue});
		await update_engagement_detail.run({"question": 2, "score": RadioGroup2.selectedOptionValue});
		await update_engagement_detail.run({"question": 3, "score": RadioGroup3.selectedOptionValue});
		await update_engagement_detail.run({"question": 4, "score": RadioGroup4.selectedOptionValue});
		await update_engagement_detail.run({"question": 5, "score": RadioGroup5.selectedOptionValue});
		await update_engagement_detail.run({"question": 6, "score": RadioGroup6.selectedOptionValue});
		await update_engagement_detail.run({"question": 7, "score": RadioGroup7.selectedOptionValue});
		await update_engagement_detail.run({"question": 8, "score": RadioGroup8.selectedOptionValue});
		await update_engagement_detail.run({"question": 9, "score": RadioGroup9.selectedOptionValue});
		await update_engagement_detail.run({"question": 10, "score": RadioGroup10.selectedOptionValue});
		await update_engagement_detail.run({"question": 11, "score": RadioGroup11.selectedOptionValue});
		await update_engagement_detail.run({"question": 12, "score": RadioGroup12.selectedOptionValue});
		await update_engagement_detail.run({"question": 13, "score": RadioGroup13.selectedOptionValue});
		await update_engagement_detail.run({"question": 14, "score": RadioGroup14.selectedOptionValue});
		await update_engagement_detail.run({"question": 15, "score": RadioGroup15.selectedOptionValue});
		await update_engagement_detail.run({"question": 16, "score": RadioGroup16.selectedOptionValue});
		await update_engagement_detail.run({"question": 17, "score": RadioGroup17.selectedOptionValue});
		await update_engagement_detail.run({"question": 18, "score": RadioGroup18.selectedOptionValue});
		await update_engagement_detail.run({"question": 19, "score": RadioGroup19.selectedOptionValue});
		await update_engagement_detail.run({"question": 20, "score": RadioGroup20.selectedOptionValue});
		await update_engagement_detail.run({"question": 21, "score": RadioGroup21.selectedOptionValue});
		await update_engagement_detail.run({"question": 22, "score": RadioGroup22.selectedOptionValue});
		await update_engagement_detail.run({"question": 23, "score": RadioGroup23.selectedOptionValue});
		showAlert('Submit data Success','success');
		closeModal('ModalConfirmSubmit')
		navigateTo('EvaluationPage', {}, 'SAME_WINDOW');

	}
}