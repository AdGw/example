let graphics;

function setup(){
	graphics = createGraphics(400,400);
	pixelDensity(1);
	createCanvas(400,400);
	graphics.background(0);
}

function draw(){
	if(mouseIsPressed){
		graphics.fill(255);
		graphics.stroke(255);
		graphics.ellipse(mouseX, mouseY, 32,32);
	}
	image(graphics,0,0);
	fill(255,0,255);
	ellipse(mouseX,mouseY, 16,16);
}
