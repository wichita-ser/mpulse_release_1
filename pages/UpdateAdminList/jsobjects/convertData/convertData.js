export default {
	company (array_company) {
		const companyFilter = get_company_list.data.filter(item => array_company.includes(item.company_id)); 
		return companyFilter.map( (item) => (item.company_name) ).join(', ');
	},
	department (array_department) {
		const departmentFilter = get_department_list.data.filter(item => array_department.includes(`${item.company}-${item.office_code}`)); 
		console.log('departmentFilter: ', departmentFilter)
		return departmentFilter.map( (item) => (item.office_name) ).join(', ');
	},
}