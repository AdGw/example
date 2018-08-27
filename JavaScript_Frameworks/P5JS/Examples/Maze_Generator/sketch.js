let col, rows, current,
    w = 20,
    grid = [], stack = [];

function setup() {
  createCanvas(800, 800);
  cols = floor(width/w);
  rows = floor(height/w);

  for(let j = 0; j < rows;j++){
    for(let i = 0; i< cols;i++){
      let cell = new Cell(i,j);
      grid.push(cell);
    }
  }
  current = grid[0];
}

function draw() {
  background(50);
  for(let i = 0; i<grid.length;i++){
    grid[i].show();
  }
  current.visited = true;
  current.highlight();
  let next = current.checkNeighbors();
  if(next){
    stack.push(current);
    next.visited = true;
    removeWalls(current, next);
    current = next;
  }else if(stack.length > 0){
    current = stack.pop();
  }
}

let index = (i,j)=>{
  if(i<0||j<0||i>cols-1||j>rows-1){
    return -1
  }
  return i+j*cols;
}

