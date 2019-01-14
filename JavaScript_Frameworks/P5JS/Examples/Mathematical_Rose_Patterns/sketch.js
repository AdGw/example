let n = 5;
let d = 8;
let sliderD;
let sliderN;

function setup(){
	createCanvas(800, 600);
	sliderD = createSlider(1,10,4, 0.1);
	sliderN = createSlider(1,10,4, 0.1);
}

function draw(){
	d = sliderD.value();
	n = sliderN.value();
	let k = n/d;
	background(51);
	translate(width/2, height/2);

	beginShape();
	stroke(255);
	strokeWeight(1);
	noFill();
	for(let a = 0; a< TWO_PI * d; a+=0.02){
		const r = 200* cos(k*a);
		const x = r * cos(a);
		const y = r * sin(a);
		vertex(x,y);
	}
	endShape();
}