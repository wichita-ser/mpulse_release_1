export default {

	async upload () {
const Papa = window.Papa;
const tableData = Table1[0].widgetData;

const csv = Papa.unparse(tableData);
const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
const csvUrl = URL.createObjectURL(csvData);

const link = document.createElement("a");
link.href = csvUrl;
link.setAttribute("download", "myTable.csv");
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}