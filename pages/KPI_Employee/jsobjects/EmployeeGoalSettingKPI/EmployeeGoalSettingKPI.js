export default {
	resetTab: async() => {
		let tab = tab_emp_kpi.selectedTab;
		
		if(tab == 'Assign'){
			storeValue('default_assign_tab', 'emp_kpi');
		}
		else if(tab == 'Individual'){
			storeValue('default_individual_tab', 'ikpi_list');
		}
		else if(tab == 'Approve'){
			storeValue('default_approve_tab', 'ikpi_status');
		}
		

		console.log(appsmith.store.default_tab);
		console.log(appsmith.store.default_assign_tab);
	}
}