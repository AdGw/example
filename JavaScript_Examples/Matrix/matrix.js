
// let m = new Matrix(3,2);
function Matrix(rows, col) {
	this.rows = rows;
	this.col = col;
	this.Matrix = [];

	for(let i = 0;i<Matrix.length;i++){
		this.Matrix[i] = [];
		for(let j = 0;j<Matrix.length;j++){
			this.Matrix[i][j] = 0;
		}
	}
}

Matrix.prototype.randomize = function(n){
	for(let i = 0;i<Matrix.length;i++){
		for(let j = 0;j<Matrix.length;j++){
			this.Matrix[i][j] = Math.floor(Math.random()*10);
		}
	}
}

Matrix.prototype.multiply = function(n) {
	if(n instanceof Matrix){
		for(let i = 0;i<Matrix.length;i++){
			for(let j = 0;j<Matrix.length;j++){
				this.Matrix[i][j] *= n.Matrix[i][j];
			}
		}
	}else{
		for(let i = 0;i<Matrix.length;i++){
			for(let j = 0;j<Matrix.length;j++){
				this.Matrix[i][j] *= n;
			}
		}
	}
}

Matrix.prototype.add = function(n) {
	if(n instanceof Matrix){
		for(let i = 0;i<Matrix.length;i++){
			for(let j = 0;j<Matrix.length;j++){
				this.Matrix[i][j] += n.Matrix[i][j];
			}
		}
	}else{
		for(let i = 0;i<Matrix.length;i++){
			for(let j = 0;j<Matrix.length;j++){
				this.Matrix[i][j] += n;
			}
		}
	}
}