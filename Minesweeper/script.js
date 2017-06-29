let grid, cols, rows, 
w = 40,
totalBees = 30;
make2DArray = (cols, rows) =>{
	let arr = new Array(cols);
	for(let i= 0;i<arr.length;i++){
		arr[i] = new Array(rows);
	}
	return arr;
}

// setup properties like amount of rows and cols
function setup(){
	createCanvas(401,401);
	cols = floor(width/w);
	rows = floor(height/w);
	grid = make2DArray(cols,rows);
	for(let i = 0;i<cols;i++){
		for(let j = 0;j<rows;j++){
			grid[i][j] = new Cell(i, j, w);
		}
	}
	let options = [];
	for(let i = 0 ; i<cols;i++){
		for(let j=0;j<rows;j++){
			options.push([i,j]);
		}
	}
	// will display an area when cell doesn't have bees in neighbors
	for(let n = 0; n<totalBees;n++){
		let index = floor(random(options.length));
		let choice = options[index];
		let i = choice[0];
		let j = choice[1];
		//Delete that spot if no longer an option
		options.splice(index,1);
		grid[i][j].bee = true;
	}

	for(let i = 0;i<cols;i++){
		for(let j = 0;j<rows;j++){
			grid[i][j].countBees();
		}
	}
}
//shows all arena
let gameOver = ()=>{
	for(let i = 0;i<cols;i++){
		for(let j = 0;j<rows;j++){
			grid[i][j].revealed = true;
		}
	}
}
// reveal cell when has been clicked
// if bees was clicked then reveal all arena
function mousePressed(){
	for(let i = 0;i<cols;i++){
		for(let j = 0;j<rows;j++){
			if(grid[i][j].contains(mouseX, mouseY)){
				grid[i][j].reveal();
				if(grid[i][j].bee){
					gameOver();
				}
			}
		}
	}
}

// draw rows and cols to display game
function draw(){
	background(255);
	for(let i = 0;i<cols;i++){
		for(let j = 0;j<rows;j++){
			grid[i][j].show();
		}
	}
}