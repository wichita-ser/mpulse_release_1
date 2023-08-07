export default {
	employee: [ //this data are retrived from back-end
  {
		"id": "01152",
    "name": "Warakorn Lertwattanapong",
		"nickname": "Jo",
		"nameTH": "วรากรณ์ เลิศวัฒนะพงษ์",
		"nicknameTH": "โจ",
		"email":"warakorn@gmail.com",
		"team": "M-Lab"
  },
  {
		"id": "01153",
    "name": "Sainamphung Phanphet",
		"nickname": "Phung",
		"nameTH": "สายน้ำผึ้ง พานเพ็ด",
		"nicknameTH": "ผึ้่ง",
		"email":"sainamphung@gmail.com",
		"team": "M-Lab"
  },
  {
		"id": "01154",
    "name": "Nawaporn Manyanon",
		"nickname": "Au",
		"nameTH": "นวพร มะยานนท์",
		"nicknameTH": "อุ",
		"email":"nawaporn@gmail.com",
		"team": "M-Lab"
  },
	{
		"id": "01155",
    "name": "Prangprai Rattanachetchutha",
		"nickname": "Ploy",
		"nameTH": "แพรงพลาย รัตนนาชุตตา ",
		"nicknameTH": "พลอย",
		"email":"prangrai@gmail.com",
		"team": "M-Lab"
  },
	{
		"id": "01156",
    "name": "Phumchanok Sakdakampanar",
		"nickname": "Card",
		"nameTH": "พุมชนก สักดาคัมนา ",
		"nicknameTH": "การ์ด",
		"email":"phumchanok@gmail.com",
		"team": "M-Lab"
  },
	{
		"id": 20201157,
    "name": "Tanawat Limsakul",
		"nickname": "Earth",
		"nameTH": "ธนวัตร ลิ่มสกุล",
		"nicknameTH": "เอิรธ์",
		"email":"tanawat@gmail.com",
		"team": "M-Lab"
  }
	],
	
	myEmployee: [ 
		{
			"id": "01152",
			"name": "Warakorn Lertwattanapong",
			"email":"warakorn@gmail.com",
			"evaluator": [
					{
						"id": "01156",
						"name": "Phumchanok Sakdakampanar",
						"email":"phumchanok@gmail.com",
						"team": "M-Lab"
					},
					{
						"id": "01155",
						"name": "Prangprai Rattanachetchutha",
						"email":"prangrai@gmail.com",
						"team": "M-Lab"
					}
				],
			"team": "M-Lab",
			"status": "Doing"
		},
		{
			"id": "01153",
			"name": "Sainamphung Phanphet",
			"email":"sainamphung@gmail.com",
			"evaluator": [
				{
				"id": 20201157,
				"name": "Tanawat Limsakul",
				"email":"tanawat@gmail.com",
				"team": "M-Lab"
				}
			],
			"team": "M-Lab", 
			"status": "Approved"
		}, 
			{
		"id": "01155",
    "name": "Prangprai Rattanachetchutha",
		"email":"prangrai@gmail.com",
		"evaluator": [
				{
					"id": 20201157,
					"name": "Tanawat Limsakul",
					"email":"tanawat@gmail.com",
					"team": "M-Lab"
				}
			],
		"team": "M-Lab",
		"status": "Pending"
  },
	],
}