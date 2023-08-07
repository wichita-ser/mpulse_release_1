export default {
	resetFilterContainer: async () => {
		await resetWidget('ContainerFilter');
		await getSummary.run();
	},
		transformEmployeeOptions: () => {
			
			if(MultiSelect.filterText !== ''){ 
			 let data =  this.employee.filter(function(item) {
				return item.name.toUpperCase().includes(MultiSelect.filterText.toUpperCase());
			 });
				
			 if(data.length>0){
					return data.map(item => {
						return {
							label: `${item.name}`,
							value: item.id
						}
					})
			 } else {
				 return [];
			 }
			
			} else {
				return this.employee.map(item => {
					return {
						label: `${item.name}`,
						value: item.id
					}
				})
			}
        
	}, 
		getEmployeeList: () => {
			let data =  this.employee;
			
			if(MultiSelect.selectedOptionValues.length > 0) {
				data =  data.filter(function(item) {
					return MultiSelect.selectedOptionValues.includes(item.id)
				});
			}
			
			if(SelectLevel.selectedOptionValue != ''){
				data =  data.filter(function(item) {
					return item.level.includes(SelectLevel.selectedOptionValue);
				});
			}
			
			if(InputDepartment.text.trim() != ''){
				data =  data.filter(function(item) {
					return item.department.toUpperCase().trim().includes(InputDepartment.text.toUpperCase().trim());
				});
			}
			
			if(InputDivision.text.trim() != ''){
				data =  data.filter(function(item) {
					return item.division.toUpperCase().trim().includes(InputDivision.text.toUpperCase().trim());
				});
			}
			
			return data;
        
	}, 
	seeEmployeeSubordinate: () => {
		const curentSubordinate = this.mySubordinate;
		const selectedSubordinate = this.employee.filter(item => MultiSelect.selectedOptionValues.includes(item.supervisor.id)); 
		let newSubordinateIDs = []
		selectedSubordinate.forEach(newSub => {//can not add the same employee (check new added employee with existing one)
				if(curentSubordinate){
					const isAlreadyPresent = curentSubordinate.some(existingEmployee => existingEmployee.id === newSub.id);
					if (!isAlreadyPresent) {
						newSubordinateIDs.push(newSub);
					}
				}else{
					newSubordinateIDs.push(newSub);
				}
  		});
		const mergeList = curentSubordinate.concat(newSubordinateIDs.map(item =>{
			return {...item, supervisor: item.supervisor.name }
		}						 
		 ))
		storeValue('subordinateList',mergeList)
	}, 
	resetMultiSelectOption: () => {
				storeValue('subordinateList',this.mySubordinate)
	}
}