export default {
	handleChangeStatus:() => { 
		const status = Table1.triggeredRow.Status
		const id = Table1.triggeredRow.id
		if(status === "Reject"){
			showModal("ModalAddComment")
			storeValue('individualIDModal',id);
		}else{
		const currentData = appsmith.store.supApprovalList;
		const indexOfEditData = currentData.findIndex(item => item.id === id)
			currentData[indexOfEditData] = {
				...currentData[indexOfEditData],
				"Status": "Approve",
				"Comment": ""
				}
		storeValue('supApprovalList',currentData)
		}
	},
	handleApproveAll : () => {
		const currentData = appsmith.store.supApprovalList;
		const result = currentData.map(item => {
			if(item.Status !== "Reject"){
				return {...item, Status: "Approve"}
			}else{
				return item;
			}
		})
		showAlert("Approve all Individual KPI", "success")
		storeValue('supApprovalList',result);
	},
	handleEditComment:() => {
		const currentTable =  Table1.triggeredRow
		const currentData = appsmith.store.supApprovalList;
		const indexOfEditData = currentData.findIndex(item => item.id === currentTable.id)
			currentData[indexOfEditData] = {
				...currentData[indexOfEditData],
				"Comment": currentTable.Comment
				}
		storeValue('supApprovalList',currentData)
	}, 
	handleSubmit: () => {
		showAlert("Save data success", "success")
	}
}