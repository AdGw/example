let polys = [],
	angle = 70,
	delta = 10,
	deltaSlider,
	angleSlider;

function setup(){
	createCanvas(800,600);
	
	deltaSlider = createSlider(0,25,0);
	angleSlider = createSlider(0,90,60);
	let inc = 100;
	for(let x = 0 ; x< width; x+= inc){
		for(let y = 0 ; y< height; y+= inc){
			let poly = new Polygon();
			poly.addVertex(x,y);
			poly.addVertex(x+inc,y);
			poly.addVertex(x+inc,y+inc);
			poly.addVertex(x,y+inc);
			poly.close();
			polys.push(poly)
		}
	}
}

function draw(){
	background(50);
	angle = angleSlider.value();
	delta = deltaSlider.value();
	for(let i in polys){
		polys[i].middle();
		polys[i].show();
	}
}

