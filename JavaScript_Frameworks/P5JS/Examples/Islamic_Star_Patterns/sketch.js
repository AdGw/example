let poly;

function setup(){
	createCanvas(800,600);
	background(50);
	poly = new Polygon();
	poly.addVertex(100,100);
	poly.addVertex(200,100);
	poly.addVertex(200,200);
	poly.addVertex(100,200);
	poly.close();
	poly.middle();
	poly.show();
}

