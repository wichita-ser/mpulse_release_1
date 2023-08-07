export default {
		openModal: async (data) => {
			await storeValue('editModalData',data)
			console.log(' StartDatepicker.selectedDate', StartDatepicker.selectedDate)
	}, 
	closeModal: () => {
	},
editData: () => {
        let currentData =	appsmith.store.settingData
        const modalData = appsmith.store.editModalData
        const data = {
            id: modalData.id,
            process: modalData.process,
            startDate: StartDatepicker.selectedDate, 
            endDate: EndDatepicker.selectedDate
        }
        currentData[modalData.id] = data; 
        storeValue('settingData', currentData);
},
}