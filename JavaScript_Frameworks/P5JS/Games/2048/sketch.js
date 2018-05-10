let grid;
let score = 0;

const isGameOver=()=>{
	for(let i = 0;i<4;i++){
		for(let j = 0;j<4;j++){
			if(grid[i][j] == 0){
				return false;
			}
			if(i!== 3 && grid[i][j] === grid[i+1][j]){
				return false;
			}
			if(j!== 3 && grid[i][j] === grid[i][j+1]){
				return false;
			}
		}
	}
	return true;
}

const blankGrid=()=>{
return[
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
}

function setup(){
	createCanvas(800,800);
	noLoop();
	grid=blankGrid();
	addNumber();
	addNumber();
	updateCanvas();
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

const compare=(a,b)=>{
	for(let i = 0;i<4;i++){
		for(let j = 0;j<4;j++){
			if(a[i][j] !== b[i][j]){
				return true;
			}
		}
	}
	return false;
}

const copyGrid=(grid)=>{
	let ex=blankGrid();
		for(let i = 0;i<4;i++){
			for(let j = 0;j<4;j++){
				ex[i][j] = grid[i][j];
			}
		}
		return ex;
}

const flipGrid=grid=>{
	for(let i = 0; i<4; i++){
		grid[i].reverse();
	}
	return grid;
}

const rotateGrid=grid=>{
	let newGrid = blankGrid()
	for(let i = 0; i<4; i++){
		for(let j = 0; j<4; j++){
			newGrid[i][j] = grid[j][i];
		}
	}
	return newGrid;
}

function keyPressed(){
	let flipped = false,
			rotated = false,
			played = true;
	if(keyCode ===DOWN_ARROW){
	}else if(keyCode ===UP_ARROW){
		grid = flipGrid(grid);
		flipped=true;
	}else if(keyCode ===RIGHT_ARROW){
		grid = rotateGrid(grid);
		rotated = true;
	}else if(keyCode ===LEFT_ARROW){
		grid = rotateGrid(grid);
		grid = flipGrid(grid);
		rotated = true;
		flipped = true;
	}else{
		played = false;
	}
	if(played){
		let past = copyGrid(grid);
		for(let i = 0; i<4; i++){
			grid[i] = operate(grid[i]);
		}
		let changed = compare(past,grid);
		if(flipped){
			grid = flipGrid(grid);
		}
		if(rotated){
			grid = rotateGrid(grid);
			grid = rotateGrid(grid);
			grid = rotateGrid(grid);
		}
		if(changed){
			addNumber();
		}
		updateCanvas();
		let gameover = isGameOver();
		if(gameover){
			alert("Game Over");
		}
	}
}

function operate(row){
	row=slide(row);
	row=combine(row);
	row=slide(row);
	return row;
}

function updateCanvas(){
	background(255);
	drawGrid();
	select('#score').html(score);
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
			score +=row[i];
			row[i-1] = 0;
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
				let s = "" + value,
						len = s.length-1,
						sizes = [64,64,32,16];

				textSize(sizes[len]);
				fill(0);
				noStroke();
				text(value, i*w+w/2,j*w+w/2)
			}
		}
	}
}
