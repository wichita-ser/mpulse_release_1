export default {
 generateRandomID:() => {
  return [...Array(32)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
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