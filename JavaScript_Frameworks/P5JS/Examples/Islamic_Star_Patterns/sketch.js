let poly,
	angle = 60;

function setup(){
	createCanvas(800,600);
	background(50);
	// angleMode(DEGREES);
	poly = new Polygon();
	poly.addVertex(100,100);
	poly.addVertex(300,100);
	poly.addVertex(300,300);
	poly.addVertex(100,300);
	poly.close();
	poly.middle();
	poly.show();
}

