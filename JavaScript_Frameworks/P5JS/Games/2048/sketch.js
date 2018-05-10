let grid;
function setup(){
	createCanvas(800,800);
	grid=[
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	addNumber();
	addNumber();
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

function keyPressed(){
	console.log("x");
	if(key == ' '){
		for(let i = 0;i<4;i++){
			grid[i]=slide(grid[i]);
			combine(grid[i]);
		}
	}
	addNumber();
}

function draw(){
	background(255);
	drawGrid();
}

const slide=row=>{
	let arr = row.filter(value=>value),
			missing = 4-arr.length,
			zeros = Array(missing).fill(0);
			arr = zeros.concat(arr);
			return arr;
}

const combine=row=>{
	for (let i = 3; i >=1; i--) {
		let a = row[i],
		 		b = row[i-1];
		if(a===b){
			row[i] = a+b;
			row[i-1] = 0;
			break;
		}
	}
	return row;
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
