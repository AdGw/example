let col, rows,
    w = 40,
    grid = []

function setup() {
  createCanvas(400, 400);
  cols = floor(width/w);
  rows = floor(height/w);

  for(let j = 0; j < rows;j++){
    for(let i = 0; i< cols;i++){
      let cell = new Cell(i,j);
      grid.push(cell);
    }
  }
}

function draw() {
  background(50);
  for(let i = 0; i<grid.length;i++){
    grid[i].show();
  }
}

function Cell(i, j){
  this.i = i;
  this.j = j;

  this.show = function(){
    let x = this.i*w;
    let y = this.j*w;
    stroke(255);
    noFill();
    rect(x,y,w,w);
  }
}