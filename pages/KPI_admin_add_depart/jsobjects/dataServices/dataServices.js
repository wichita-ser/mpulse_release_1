export default {
	divisionList: async (Department) => {
		const Data = get_department.data.find(item => item.department_name === Department)
		await get_division.run({'department_id': Data.department_id})
		storeValue('DivisionEdit', get_division.data)
	},
	autoEvaluate: () => {
		return [
			{
				"label": "None",
				"value": ""
			},
			{
				"label": "CPI",
				"value": "CPI"
			},
			{
				"label": "NP",
				"value": "NP"
			},
			{
				"label": "RBI",
				"value": "RBI"
			},
			{
				"label": "RUI",
				"value": "RUI"
			},
			{
				"label": "SPI",
				"value": "SPI"
			},
			{
				"label": "STG",
				"value": "STG"
			}
		]
	}

}