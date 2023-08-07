export default {
	openModal: async () => {
		showModal('modal_view_duration');
	},
	closeModal: (data) => {
			storeValue('seeDetailsData',{});
	}
}