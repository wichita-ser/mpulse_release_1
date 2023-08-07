export default {
	transformEmployeeOptions: () => {
		return appsmith.store.selectOptions.map(item => {
			return {
				label: `${item.name} (${item.nickname}) - ${item.team}` ,
				value: item.id
			}
		})
	},
	checkSumWeight: () => {
		let sumWeight = 0;
		
		appsmith.store.assignEmployeeDepartments.map((item) => {
			sumWeight += Number(item.Weight)
		})

		if(sumWeight===100){
			return true;
		} else {
			return false;
		}
	}
}