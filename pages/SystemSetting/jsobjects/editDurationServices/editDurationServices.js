export default {
handleEdit: (data) => {
    const transformData =	{
   "id": data.id,
   "year": data.year,
   "round": data.round,
   "startDate": data.startDate,
   "endDate": data.endDate,
   "status": data.status,
   "setting":data.setting
}
   storeValue('editDurationData',transformData);
   },
}