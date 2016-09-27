import $ from 'jquery';

var skills = [
	{
		id: "node",
		data: [
			{
				value: 70,
				color:"#1abc9c"
			},
			{
				value : 30,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "javascript",
		data: [
			{
				value: 85,
				color:"#1abc9c"
			},
			{
				value : 15,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "react",
		data: [
			{
				value: 75,
				color:"#1abc9c"
			},
			{
				value : 25,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "angular",
		data: [
			{
				value: 70,
				color:"#1abc9c"
			},
			{
				value : 30,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "bootstrap",
		data: [
			{
				value: 75,
				color:"#1abc9c"
			},
			{
				value : 25,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "wordpress",
		data: [
			{
				value: 65,
				color:"#1abc9c"
			},
			{
				value : 35,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "html",
		data: [
			{
				value: 90,
				color:"#1abc9c"
			},
			{
				value : 10,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "photoshop",
		data: [
			{
				value: 70,
				color:"#1abc9c"
			},
			{
				value : 30,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "php",
		data: [
			{
				value: 50,
				color:"#1abc9c"
			},
			{
				value : 50,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "illustrator",
		data: [
			{
				value: 70,
				color:"#1abc9c"
			},
			{
				value : 30,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "git",
		data: [
			{
				value: 80,
				color:"#1abc9c"
			},
			{
				value : 20,
				color : "#ecf0f1"
			}
		]
	},
	{
		id: "jetbrains",
		data: [
			{
				value: 65,
				color:"#1abc9c"
			},
			{
				value : 35,
				color : "#ecf0f1"
			}
		]
	}
];

var myDoughnut

$.each(skills, function (index, elem) {
	myDoughnut = new Chart(document.getElementById(elem.id).getContext("2d")).Doughnut(elem.data);
});
