let triangle = [];
	circle = [];
	morphy =[];
	spacing = 10;
	theta = 0;

let cartesian = (radius, angle) => 
	createVector(radius * cos(angle), radius * sin(angle));

function setup(){
	createCanvas(800,600);
	angleMode(DEGREES);
	let radius = 100;
		startAngle = 0;
		endAngle = 120;
		start = cartesian(radius, startAngle);
		end = cartesian(radius, endAngle);
	for(let angle = startAngle; angle < 360 ; angle+=spacing){
			cv = cartesian(radius, angle);
			circle.push(cv);
			morphy.push(cv);
		let amt = (angle % 120)/(endAngle-startAngle); 
			tv = p5.Vector.lerp(start,end, amt);
			triangle.push(tv);
			if((angle + spacing) % 120 === 0){
				startAngle = startAngle+120;
				endAngle = endAngle+120;
				start = cartesian(radius, startAngle);
				end = cartesian(radius, endAngle);
			}
	}
}

function draw(){
	background(255);
	translate(width/2,height/2);
	stroke(0);
	rotate(30);
	noFill();	

beginShape();
	let amount = (sin(theta)+1)/2;
	theta +=1;
	for(let i = 0; i<circle.length;i++){
		cv = circle[i];
		tv = triangle[i];
		x = lerp(cv.x, tv.x,amount);
		y = lerp(cv.y, tv.y,amount);
		vertex(x,y);
	}
	endShape(CLOSE);
}