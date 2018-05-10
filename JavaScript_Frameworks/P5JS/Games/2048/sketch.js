let grid;
function setup(){
	createCanvas(800,800);
	grid=[
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	console.table(grid)
	addNumber();
	addNumber();
	console.table(grid)
}

const addNumber=()=>{
	let options =[];
	for(let i = 0;i<4;i++){
		for(let j = 0;j<4;j++){
			if(grid[i][j] === 0){
				options.push({
					x:i,
					y:j
				});
			}
		}
	}
	if(options.length > 0);
	let spot = random(options),
			r = random(1)
	grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;
}

function draw(){
	background(255);
	drawGrid();
}

const drawGrid = () =>{
	let w = 100;
	for(let i = 0;i<4;i++){
		for(let j = 0;j<4;j++){
			noFill();
			strokeWeight(2);
			stroke(0)
			rect(w*i,w*j,w,w);
			let value = grid[i][j];
			if(grid[i][j] !== 0){
				textAlign(CENTER, CENTER);
				textSize(48);
				fill(0);
				noStroke();
				text(value, i*w+w/2,j*w+w/2)
			}
		}
	}
}
