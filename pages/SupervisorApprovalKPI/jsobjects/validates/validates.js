export default {
	 validateRejectStatus () {
		const currentData = appsmith.store.supApprovalList; 
		 console.log('currentData', currentData)
		const isContainNoComment = currentData.some(item => {
			if(item.Status === "Reject" && item.Comment.length === 0){
				return true
			}else{
				return false
			}
		})
			return isContainNoComment
		}
}