export default {
	coperateKPIDetails:[
		{
			id:1,
			"perspective": "Profitability",
			"KPI": "Financial  (Sales/Service Delivery/Data Intelligence/CSS)",
			"target": "target1",
			"measurements": "เพิ่มการเติบโตด้านกำไร ลด deal ที่ทำให้ Margin ลดลงเรื่อยๆ หาทางลดค่าใช้จ่ายที่ไม่จำเป็น สร้างโปรเจคที่ก่อให้เกิดการเติบโต (Growth) ในอนาคตโดยมุ่งเน้นผ่านกลุ่มดังต่อไปนี้ App Development, Big Data Enterprise, Hybrid 				enterprise solution, Security, Cloud, System, and Network"
		},
		{
			id:2,
			"perspective": "Profitability",
			"KPI": "Net Profit (NP)",
			"target": "target2",
			"measurements": "Net Profit (NP) Financial statement company (งบกำไรขาดทุนของบริษัท) ข้อมูล TB ของบัญชี ข้อมูลปิดบัญชี มาจาก Navision รายได้ ต้นทุน โครงการ (ประมาณการ)"
		},
		{
			id:3,
			"perspective": "Profitability",
			"KPI": "% Gross Profit Growth",
			"target": "target3",
			"measurements": "วัด Compare Time Period Gross Profit (month, quarter, year) Year on Year, Quarter on Quarter, Month on Month TB ของบัญชี Gross Profit (คำนวณ Growth) % Growth หม้อข้าวเดียวกัน"
		},
		{
			id:4,
			"perspective": "Profitability",
			"KPI": "% Growth (e.g. new product,recurring)",
			"target": "target3",
			"measurements": "Estimated ROI ในรูปของการลงทุน pipeline, financial statement"
		},
		{
			"perspective": "Resource Performance",
			"KPI": "% Project on the commitment (follow PMO project)",
			"target": "target4",
			"measurements": "MPM วัดจาก ค่า SPI (ดูค่าได้ Real Time จากระบบเดิมหรือระบบใหม่จาก Pentaho) ข้อมูล Input ดึงมาจาก MPM หน้า bookable "
		},
		{
			id:5,
			"perspective": "Resource Performance",
			"KPI": "% Project on Budget (Man-days delivered inside the scope)",
			"target": "target4",
			"measurements": "MPM วัดจาก ค่า CPI (แก้ MPM ให้รับ Man-Days) (ดูค่าได้ Real Time จากระบบเดิมหรือระบบใหม่จาก Pentaho) ข้อมูล Input ดึงมาจาก MPM หน้า bookable"
		},
		{
			id:6,
			"perspective": "Strategic conformance rating",
			"KPI": "% Strategic conformance rating",
			"target": "target5",
			"measurements": "กำหนดหัวข้อ Strategic / ทำตาม Strategic /สนับสนุนภาพรวม Rating = A,B,C"
		}
	],
	departmentKPIDetail:	[
		{
			"id":1,
			"perspective": "Profitability",
			"Corporate_KPI": "Net Profit (NP)", 
			"target": "50%", 
			"Department_KPI":"Net Profit (NP)",
			"Measurement":"Net Profit (NP) Financial statement company (งบกําไรขาดทุนของบริษัท) ข้อมูล TB ของบัญชี ข้อมูลปิดบัญชี มาจาก Navision รายได้ ต้นทุน โครงการ (ประมาณการ)",
			"department": "Business Innovation Unit",
			"division": "Innovation Lab",
			"weight": "30",
			"score_measurement_1": "< 70%",
			"score_measurement_2": "70% ≤  X < 100%",
			"score_measurement_3": "100% จำนวน NC คงค้าง > 5 หรือ จำนวน OB คงค้าง > 5  หรือ จำนวน OFI คงค้าง > 5",
			"score_measurement_4": "100% และจำนวน NC คงค้าง ≤ 5 หรือจำนวน OB คงค้าง  ≤ 5 หรือจำนวน OFI คงค้าง ≤ 5",
			"score_measurement_5": "100% และจำนวน NC คงค้าง = 0 และจำนวน OB คงค้าง = 0 และจำนวน OFI คงค้าง = 0"
		},
		{
			"id":2,
			"perspective": "Profitability",
			"Corporate_KPI": "% Gross Profit Growth", 
			"target": "20%",
			"Department_KPI":"% Gross Profit Growth",
			"Measurement":"วัด Compare Time Period Gross Profit (month, quarter, year) Year on Year, Quarter on Quarter, Month on Month TB ของบัญชี Gross Profit (คํานวณ Growth) % Growth หม้อข้าวเดียวกัน",
			"department": "Business Innovation Unit",
			"division": "Innovation Lab",
			"weight":"30",
			"score_measurement_1": "< 70%",
			"score_measurement_2": "70% ≤  X < 100%",
			"score_measurement_3": "100% จำนวน NC คงค้าง > 5 หรือ จำนวน OB คงค้าง > 5  หรือ จำนวน OFI คงค้าง > 5",
			"score_measurement_4": "100% และจำนวน NC คงค้าง ≤ 5 หรือจำนวน OB คงค้าง  ≤ 5 หรือจำนวน OFI คงค้าง ≤ 5",
			"score_measurement_5": "100% และจำนวน NC คงค้าง = 0 และจำนวน OB คงค้าง = 0 และจำนวน OFI คงค้าง = 0"
		},
		{
			"id":3,
			"perspective": "Profitability",
			"Corporate_KPI": "% Growth (e.g. new product,recurring)", 
			"target": "50,000 THB",
			"Department_KPI":"% Growth",
			"Measurement":"Estimated ROI ในรูปของการลงทุน pipeline, financial statement",
			"department": "Business Innovation Unit",
			"division": "Innovation Lab",
			"weight":"10",
			"score_measurement_1": "< 70%",
			"score_measurement_2": "70% ≤  X < 100%",
			"score_measurement_3": "100% จำนวน NC คงค้าง > 5 หรือ จำนวน OB คงค้าง > 5  หรือ จำนวน OFI คงค้าง > 5",
			"score_measurement_4": "100% และจำนวน NC คงค้าง ≤ 5 หรือจำนวน OB คงค้าง  ≤ 5 หรือจำนวน OFI คงค้าง ≤ 5",
			"score_measurement_5": "100% และจำนวน NC คงค้าง = 0 และจำนวน OB คงค้าง = 0 และจำนวน OFI คงค้าง = 0"
		},{
			"id":4,
			"perspective": "Resource Performance",
			"Corporate_KPI": "% Project on the commitment (follow PMO project)", 
			"target": "10%",
			"Department_KPI":"% Project on the commitment",
			"Measurement":"MPM วัดจาก ค่า SPI (ดูค่าได้ Real Time จากระบบเดิมหรือระบบใหม่จาก Pentaho) ข้อมูล Input ดึงมาจาก MPM หน้า bookable",
			"department": "Business Innovation Unit",
			"division": "Innovation Lab",
			"weight":"20",
			"score_measurement_1": "< 70%",
			"score_measurement_2": "70% ≤  X < 100%",
			"score_measurement_3": "100% จำนวน NC คงค้าง > 5 หรือ จำนวน OB คงค้าง > 5  หรือ จำนวน OFI คงค้าง > 5",
			"score_measurement_4": "100% และจำนวน NC คงค้าง ≤ 5 หรือจำนวน OB คงค้าง  ≤ 5 หรือจำนวน OFI คงค้าง ≤ 5",
			"score_measurement_5": "100% และจำนวน NC คงค้าง = 0 และจำนวน OB คงค้าง = 0 และจำนวน OFI คงค้าง = 0"
		},
		{
		"id":5,
		"perspective": "Resource Performance",
		"Corporate_KPI": "% Project on Budget (Man-days delivered inside the scope)", 
		"target": "100%",
		"Department_KPI":"% Project on Budget",
		"Measurement":"MPM วัดจาก ค่า CPI (แก้ MPM ให้รับ Man-Days) (ดูค่าได้ Real Time จากระบบเดิมหรือระบบใหม่จาก Pentaho) ข้อมูล Input ดึงมาจาก MPM หน้า bookable",
		"department": "Business Innovation Unit",
		"division": "Venture Lab",
		"weight":"10",
		"score_measurement_1": "< 70%",
		"score_measurement_2": "70% ≤  X < 100%",
		"score_measurement_3": "100% จำนวน NC คงค้าง > 5 หรือ จำนวน OB คงค้าง > 5  หรือ จำนวน OFI คงค้าง > 5",
		"score_measurement_4": "100% และจำนวน NC คงค้าง ≤ 5 หรือจำนวน OB คงค้าง  ≤ 5 หรือจำนวน OFI คงค้าง ≤ 5",
		"score_measurement_5": "100% และจำนวน NC คงค้าง = 0 และจำนวน OB คงค้าง = 0 และจำนวน OFI คงค้าง = 0"
		},
		{
		"id":6,
		"perspective": "Strategic conformance rating",
		"Corporate_KPI": "% Strategic conformance rating",
		"Department_KPI":"xxx",
		"target": "sale grow more than 50%",
		"Measurement":"กําหนดหัวข้อ Strategic / ทําตาม Strategic /สนับสนุนภาพรวม Rating = A,B,C",
		"department": "People Excellence",
		"division": "People Development and Growth (PDG)",
		"weight":"10",
		"score_measurement_1": "< 70%",
		"score_measurement_2": "70% ≤  X < 100%",
		"score_measurement_3": "100% จำนวน NC คงค้าง > 5 หรือ จำนวน OB คงค้าง > 5  หรือ จำนวน OFI คงค้าง > 5",
		"score_measurement_4": "100% และจำนวน NC คงค้าง ≤ 5 หรือจำนวน OB คงค้าง  ≤ 5 หรือจำนวน OFI คงค้าง ≤ 5",
		"score_measurement_5": "100% และจำนวน NC คงค้าง = 0 และจำนวน OB คงค้าง = 0 และจำนวน OFI คงค้าง = 0"
		}
	], 
	perspectiveWeight: [
{id:1,"Department": "Business Innovation Unit", "Division": "M-Lab", "Profitability": 10,"Resource_Performance": 60,"Strategic_conformance_rating": 40},
{id:2,"Department": "Business Innovation Unit","Division": "Venture Lab", "Profitability": 20,"Resource_Performance": 50,"Strategic_conformance_rating": 30},
{id:3,"Department": "Business Innovation Unit","Division": "M-Lab","Profitability": 30,"Resource_Performance": 40,"Strategic_conformance_rating": 30}
]
}




