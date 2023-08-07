export default {
	openModal: (data) => {
		const transformData =	{
			"id": data.id,
			"year": data.year,
			"round": data.round,
			"startDate": moment(data.startDate).format('DD/MMMM/YYYY'),
			"endDate": moment(data.endDate).format('DD/MMMM/YYYY'),
			"status": data.status,
			"setting":helpers.transformSettingData(data.setting)
		}
	storeValue('seeDetailsData',transformData);
	},
	closeModal: (data) => {
			storeValue('seeDetailsData',{});
	}
}