const blankGrid=()=>[
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
];

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

const copyGrid=grid=>{
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

const transposeGrid=grid=>{
	let newGrid = blankGrid()
	for(let i = 0; i<4; i++){
		for(let j = 0; j<4; j++){
        newGrid[i][j] = grid[j][i];
      }
		}
	return newGrid;
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
	if(options.length > 0){
  	let spot = random(options),
  			r = random(1);
  	grid[spot.x][spot.y] = r > 0.1 ? 2 : 4;
    grid_new[spot.x][spot.y] = 1;
  }
}
