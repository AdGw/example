let anglex = 0;
let angley = 0;
let anglez= 0;
function setup() {
	createCanvas(400, 400, WEBGL);
}

function draw(){
	background(0);
	pointLight(0, 0, 255, mouseX-200, -mouseY+200,0);
	directionalLight(255,255,0, 0,1,0);
	rectMode(CENTER);
	rotateX(anglex);
	rotateY(angley);
	rotateZ(anglez);
	noStroke();
	ambientMaterial(255);
	box(100);
	anglex += 0.01;
	angley += 0.02;
	anglez += 0.01;
}
