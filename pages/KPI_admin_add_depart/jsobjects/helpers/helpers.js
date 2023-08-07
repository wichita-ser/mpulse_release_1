export default {
 generateRandomID:() => {
  return [...Array(32)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
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
	convertScore: (inputString) => {
	const pattern =  /^(Score \d+)/;
	const matches =  inputString.match(pattern);
	const result = matches? matches[0].replace(/\s/g, ''): inputString;
	if(inputString === "Score1" || "Score2"|| "Score3" || "Score4" || "Score5"){
		return result
	}
	}, 
	convertArrayScore: (item) => {
	const pattern =  /^(Score \d+)/;
	const data = Object.keys(item);
	const result = data.reduce((previous,current) => {
		const matches =  current.match(pattern);
		const result = matches? matches[0].replace(/\s/g, ''): current;
		if(previous){
						return {...previous,[result]:item[current]}
		}else{
			return {[item]:result}
		}
		},{})
		return result
	},
	transformDivisionOptions: (value, data) => {
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
	transformDepartmentData: (data) => {		 
		return data.map(item => {
			return{
				"label":item["department_name"],
				"value":item["department_name"] ,
			}
		})
	}, 
		transformPerspectiveData: (data) => {
		return data.map(item => {
			return{
				"label": item.name, 
				"value":  item.name
			}
		})
	}
}