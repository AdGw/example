let s;
let scl = 20;
let food;
function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(15);
	pickLocation();
}

let pickLocation = () =>{
	let col = floor(width/scl);
	let row = floor(height/scl);
	food = createVector(floor(random(col)), floor(random(row)));
	food.mult(scl);
}

function draw() {
	background(0);
	s.death();
	s.update();
	s.show();
	if(s.eat(food)){
		pickLocation();
	}
	keyPressed();

	fill(255,0,255);
	rect(food.x, food.y, scl, scl);
}

let keyPressed = () =>{
	if(keyCode === UP_ARROW){
		s.dir(0,-1);
	}else if(keyCode === DOWN_ARROW){
		s.dir(0,1);
	}else if(keyCode === RIGHT_ARROW){
		s.dir(1,0);
	}else if(keyCode === LEFT_ARROW){
		s.dir(-1,0);	
	}
}