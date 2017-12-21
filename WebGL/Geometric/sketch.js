let anglex = 0;
let angley = 0;
let anglez= 0;
function setup() {
	createCanvas(400, 400, WEBGL);
}

function draw(){
	background(0);
	rectMode(CENTER);
	rotateX(anglex);
	rotateY(angley);
	rotateZ(anglez);
	torus(50, 20);
	anglex += 0.1;
	angley += 0.02;
	anglez += 0.1;
}