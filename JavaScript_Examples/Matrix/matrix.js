
// let m = new Matrix(3,2);
class Matrix{
	constructor(rows, col) {
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

	randomize(){
		for(let i = 0;i<Matrix.length;i++){
			for(let j = 0;j<Matrix.length;j++){
				this.Matrix[i][j] = Math.floor(Math.random()*10);
			}
		}
	}

	multiply(n){
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

	add(n){
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
}