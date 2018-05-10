let grid;
let score = 0;

function setup(){
	createCanvas(800,800);
	noLoop();
	grid=blankGrid();
	addNumber();
	addNumber();
	updateCanvas();
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
		let gamewon = isGameWon();
		if(gamewon){
			alert("Game Over");
		}
	}
}

function updateCanvas(){
	background(255);
	drawGrid();
	select('#score').html(score);
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
