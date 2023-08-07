export default {
	employee: [ //this data are retrived from back-end
  {
		"id": 20201152,
    "name": "Warakorn Lertwattanapong",
		"email":"warakorn@gmail.com",
		"team": "M-Lab"
  },
  {
		"id": 20201153,
    "name": "Sainamphung Phanphet",
		"email":"sainamphung@gmail.com",
		"team": "M-Lab"
  },
  {
		"id": 20201154,
    "name": "Nawaporn Manyanon",
		"email":"nawaporn@gmail.com",
		"team": "M-Lab"
  },
	{
		"id": 20201155,
    "name": "Prangprai Rattanachetchutha",
		"email":"prangrai@gmail.com",
		"team": "M-Lab"
  },
	{
		"id": 20201156,
    "name": "Phumchanok Sakdakampanar",
		"email":"phumchanok@gmail.com",
		"team": "M-Lab"
  },
	{
		"id": 20201157,
    "name": "Tanawat Limsakul",
		"email":"tanawat@gmail.com",
		"team": "M-Lab"
  }
],
myEmployee: [ //Mock data
		{
			"id": 20201152,
			"name": "Warakorn Lertwattanapong",
			"email":"warakorn@gmail.com",
			"evaluator": [
					{
						"id": 20201156,
						"name": "Phumchanok Sakdakampanar",
						"email":"phumchanok@gmail.com",
						"team": "M-Lab"
					},
					{
						"id": 20201155,
						"name": "Prangprai Rattanachetchutha",
						"email":"prangrai@gmail.com",
						"team": "M-Lab"
					}
				],
			"team": "M-Lab",
			"status": "Doing"
		},
		{
			"id": 20201153,
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
		"id": 20201155,
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
  }
	],
comment: [
  {
		"comment":"เพิ่มรายชื่อ คนประเมินอีก 2 คน เช่น คนที่เคยทำ Project กันหรือ คนนอกทีมที่เคยทำงานด้วยกัน"
  }
],
}