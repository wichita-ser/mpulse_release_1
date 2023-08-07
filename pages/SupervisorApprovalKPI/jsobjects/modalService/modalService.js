export default {
	closeModal: () => {
		resetWidget('ModalAddComment')
		closeModal("ModalAddComment")
	}, 
	saveModal: () => {
		const id = appsmith.store.individualIDModal;
		const currentData = appsmith.store.supApprovalList;
		const indexOfEditData = currentData.findIndex(item => item.id === id)
			currentData[indexOfEditData] = {
				...currentData[indexOfEditData],
				"Status": "Reject",
				"Comment": InputComment.inputText
				}
		showAlert("Add comment success", "success")
		storeValue('supApprovalList',currentData)
	this.closeModal()
	}, 
}