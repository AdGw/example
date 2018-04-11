let data = [10,20,40,500,360,20,8,260,1,20,30,48,600,];
	height = 500;
	width = 500;
	tool = d3.select('body').append('div')
		.style('position','absolute')
		.style('background','#ccc')
		.style('padding','3 10px')
		.style('border','2px #333 solid')
		.style('border-radius','5px')
		.style('opacity', '0')

let yScale = d3.scaleLinear();
	yScale.domain([0, d3.max(data)]);
	yScale.range([0, height]);

let xScale = d3.scaleBand();
	xScale.domain(d3.range(0, data.length));
	xScale.range([0, width]);

let colorScale = d3.scaleLinear();
	colorScale.domain([0, data.length]);
	colorScale.range(['rgb(255, 0, 0)','rgb(0, 255, 0)']);

let myChart = d3.select('#chart').append('svg')
    .attr('width',width)
    .attr('height',height)
    .style('background', '#f4f4f4');
    
    myChart.selectAll('rect')
    .data(data)
    .enter().append('rect')
        .style('fill', ((d, i) => colorScale(i)))    
        .attr('width',xScale.bandwidth())
        .attr('x',((d, i) => xScale(i)))
        .attr('height', ((d)=> yScale(d)))
        .attr('y',((d)=> height - yScale(d)))
    .on('mouseover',function(d){
    	tool.transition()
    		.style('opacity',1)
    	tool.html(d)
    		.style('left',(d3.event.pageX + 'px'))
    		.style('top', (d3.event.pageY + 'px'))
    	d3.select(this).style('opacity', 0.5)
    })
    .on('mouseout', function(d){
    	tool.transition()
    		.style('opacity',0)
    	d3.select(this).style('opacity', 1)
    })
    