let data = [10,20,40,500,360,20,8,260,1,20,30,48,600,];

let height = 500;
let width = 500;

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
