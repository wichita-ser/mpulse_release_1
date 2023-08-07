export default {
 generateRandomID:() => {
 	return [...Array(32)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
	}, 
	transformDivisionOptions: (value) => {
		const currentSelectedDepartment = value;
		const division = data.divisionData[currentSelectedDepartment]
		const result = division && division.map(item => {
			return {
				"label": item, 
				"value": item
			}
		}																	
		)
		return result;
	}, 
	saveSimilarStrings:(array) => {
		const similarStrings = [];
		for (let i = 0; i < array.length; i++) {
			for (let j = i + 1; j < array.length; j++) {
				if (array[i] === array[j]) {
					similarStrings.push(array[i]);
				}
			}
		}
		return similarStrings
	 },
	 transformDepartmentData: (data) => {		 
		return data.map(item => {
			return{
				"label":item["department_name"],
				"value":item["department_name"] ,
			}
		})
	}, 
}