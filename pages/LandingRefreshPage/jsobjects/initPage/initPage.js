export default {
async init (){
		console.log('This is Landing Refresh Page',appsmith.URL.queryParams.company)
	  storeValue('company',appsmith.URL.queryParams.company)
		const currentPage = appsmith.store.page;
		console.log('go to page', currentPage )
	if(currentPage){
			navigateTo(currentPage);
	}else{
			navigateTo("Home");
	}
},
}