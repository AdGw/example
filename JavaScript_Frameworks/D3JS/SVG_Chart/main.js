let data =[100,125,50,41,220,178,224,10,22];
	height = 500;
	width = 500
	barWidth = 35;
	barOffset = 5;
	myChart = d3.select('#chart').append('svg')
		.attr('width', width)
		.attr('height', height)
		.style('background', '#ccc')
		.selectAll('rect')
			.data(data)
			.enter().append('rect')
			.style('fill', '#ff0000')
			.attr('width', barWidth)
			.attr('height', ((d)=>d))
			.attr('x', ((d,i)=>i * (barWidth+barOffset)))
			.attr('y', ((d)=>height-d))