
let snow =[];
let gravity;

function setup (){
	createCanvas(windowWidth,windowHeight);
	gravity = createVector(0 , 0.005);
}

function draw (){
	background(0);
	console.log(snow.length);
	snow.push(new Snow());
	for(flake of snow){
		flake.applyForce(gravity);
		flake.update();
		flake.render();
	}
	//loop which ensure a optimal work of code
	//without fps drops;
	for(let i = snow.length - 1; i >= 0; i--){
		if(snow[i].offScreen()){
			snow.splice(i,1);
		}
	}
}