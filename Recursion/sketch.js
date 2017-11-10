function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(0);
	stroke(255);
	noFill();
	drawCircle(width/2,height/2,400);
	noLoop();
}

let drawCircle = (x,y,r) =>{
	ellipse(x,y,r);
	if(r>2){
		let newR = r*0.4;
		drawCircle(x+newR,y,newR*1.1);
		drawCircle(x-newR,y,newR*1.1);
		drawCircle(x,y+newR,newR*1.1);
		drawCircle(x,y-newR,newR*1.1);

	}
}