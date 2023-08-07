export default {
	hideMenu () {
		const level = appsmith.store.jwt.level 
		const isSupervisor = appsmith.store.jwt.isSupervisor
		const isAdmin = appsmith.store.jwt.isAdmin
		if(isAdmin){
			return true
		}
		else if((level === "F" && !isSupervisor)  || level === "G" || level === "H" || level === "I" )
		{
			return false
		}
		else{
			return true
		}
	}
}