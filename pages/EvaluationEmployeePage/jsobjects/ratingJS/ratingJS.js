export default {
	professionalTable () {
		let buttonDisable =  false;
		TableProfessional.processedTableData.map((item) => {
			if(!item.score){
				buttonDisable =  true;
			}
		})
		return buttonDisable;
	},
	kpiTable () {
		let buttonDisable =  false;
		TableDepartment.processedTableData.map((item) => {
			if(!item.rating){
				buttonDisable =  true;
			}
		})
		TableIndividual.processedTableData.map((item) => {
			if(!item.rating){
				buttonDisable =  true;
			}
		})
		return buttonDisable;
	},
}