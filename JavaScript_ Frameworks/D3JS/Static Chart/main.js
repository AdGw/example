
let styles =[{
	'background': 'red',
	'color': 'white',
	'width': '40'
},{
	'background': 'yellow',
	'color': 'black',
	'width': '30'
},{
	'background': 'green',
	'color': 'white',
	'width': '20'
},{
	'background': 'black',
	'color': 'white',
	'width': '18'
},{
	'background': 'orange',
	'color': 'white',
	'width': '5'
}
];
d3.selectAll('.items li')
	.data(styles)
	.style({
		'font-size': '18px',
		'padding': "6px",
		'margin': '5px',
		'list-style': 'none',
		'background': function(d){
			return d.background;
		},
		'color': function(d){
			return d.color;
		},
		'width': function(d){
			return d.width +'%';
		}
	})