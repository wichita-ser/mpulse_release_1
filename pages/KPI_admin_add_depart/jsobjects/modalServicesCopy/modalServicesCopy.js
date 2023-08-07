export default {
	openModal: (thisData) => {
		const transformData ={ 
			...thisData,
		perspective: {
			label: thisData.perspective, 
			value: thisData.perspective
		}, 
		}
		storeValue('editModalDetails',transformData)
	},
	closeModal: () => {
		storeValue('editModalDetails',[])
	},
		editKPI: (perspective, KPI, measurements) => {
		const id = appsmith.store.editModalDetails.id
		let currentCoperateKPI = appsmith.store.coperateDetail;
		const indexOfEditData = currentCoperateKPI.findIndex(item => item.id === id)
		currentCoperateKPI[indexOfEditData] = {id,perspective, KPI, target:InputTargetEdit.inputText , measurements }
		storeValue('coperateDetail',currentCoperateKPI)
		this.closeModal();
	}
}