export default {
	employee: [ //this data are retrived from back-end
  {
		"id": 20201152,
    "name": "Warakorn Lertwattanapong",
		"email":"warakorn@gmail.com",
			"Tel": "0877945612",
  },
  {
		"id": 20201153,
    "name": "Sainamphung Phanphet",
		"email":"sainamphung@gmail.com",
		"Tel": "0877945612",
	},
  {
		"id": 20201154,
    "name": "Nawaporn Manyanon",
		"email":"nawaporn@gmail.com",
		"Tel": "0877945612",
	},
	{
		"id": 20201155,
    "name": "Prangprai Rattanachetchutha",
		"email":"prangrai@gmail.com",
		"Tel": "0877945612",
	},
	{
		"id": 20201156,
    "name": "Phumchanok Sakdakampanar",
		"email":"phumchanok@gmail.com",
		"Tel": "0877945612",
	},
	{
		"id": 20201157,
    "name": "Tanawat Limsakul",
		"email":"tanawat@gmail.com",
		"Tel": "0877945612",
	}
],
	displayData: () => {
		return [
			{process: "Supervisor Goal Setting", startDate:"12/November/23", endDate: "11/November/23" },
			{process: "Employee Goal Setting", startDate:"", endDate: "" },
			{process: "Supervisor Core value Setting", startDate:"", endDate: "" },
			{process: "Employee Core value Setting", startDate:"", endDate: "" },
			{process: "Supervisor Evaluation", startDate:"", endDate: "" }, 
			{process: "Employee Evaluation", startDate:"", endDate: "" }, 
		]
},
	transformEmployeeOptions: () => {
		const selectOptions = appsmith.store.selectOptions
		return selectOptions.map(item => {
			return {
				label: item.name,
				value: item.id
			}
		})
	}, 
	updateSelectOption: (currentSelected) => {
		const newSelectOptions = []
		this.employee.forEach(item => {//can not add the same employee (check new added employee with existing one)
					const isAlreadyPresent = currentSelected.some(existingEmployee => existingEmployee.id === item.id);
					if (!isAlreadyPresent) {
						newSelectOptions.push(item);
					}
			})
		storeValue('selectOptions', newSelectOptions)
	},
	addSelectedEmployee: async (selectedEmployeeId) => {
			const curentEmployees = appsmith.store.editEmployeeListAdminManagement;
			const newEmployees = this.employee.filter(item => selectedEmployeeId.includes(item.id)); 
			const mergeArray = curentEmployees ? curentEmployees.concat(newEmployees) : newEmployees;
			this.updateSelectOption(mergeArray);
			storeValue('editEmployeeListAdminManagement',mergeArray);
	},
		deleteEmployee: (thisEmployee) => {
		const result = appsmith.store.editEmployeeListAdminManagement.filter(item => item.id!==thisEmployee.id )
		this.updateSelectOption(result)
		storeValue('editEmployeeListAdminManagement',result)
	},
		handleSubmit: () => { //send selected employee to the back-end
		const curentEmployees = appsmith.store.editEmployeeListAdminManagement;
		storeValue('employeeListAdminManagementTable', curentEmployees)
	},
		openModal: () => {
		storeValue('editEmployeeListAdminManagement', appsmith.store.employeeListAdminManagementTable)
	}, 
	closeModal: () => {
		this.updateSelectOption(appsmith.store.employeeListAdminManagementTable)
		//storeValue('member', [])
	}
}