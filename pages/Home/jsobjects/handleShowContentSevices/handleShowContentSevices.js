export default {
	showContents () {
		const level = appsmith.store.jwt.level 
		const isSupervisor = appsmith.store.jwt.isSupervisor
		if((level === "F" && !isSupervisor)  || level === "G" || level === "H" || level === "I" )
		{
			return false
		}else{
			return true
		}
	}

}