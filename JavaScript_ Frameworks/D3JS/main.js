d3.selectAll('li:nth-child(odd)')
	.style('color', 'red')
	.html('This is an even number')
	.classed('big',true);
let name = ' Jon Doe'
let numArray =[10,40,70,20,50,40,21,80,44];
let li = d3.select('body').selectAll('.items li')
	.data(numArray)
	.text((d)=>'This is an item number ' + d);
	li.enter().append('li')
	.text((d)=>'This is an item number ' + d);
	li.exit().remove();

	d3.select('.name').text(name)

d3.select('body').selectAll('.items li')
	.data(numArray)
	.style('font-size', ((d)=> d + 'px'))