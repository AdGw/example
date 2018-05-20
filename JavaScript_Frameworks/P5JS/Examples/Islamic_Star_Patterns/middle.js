function Middle(a,v){
	this.a = a;
	this.v = v;
	this.b = p5.Vector.add(a,v);
	this.end;
	this.previousD;
	this.show = () =>{
		stroke(255);
		line(this.a.x, this.a.y, this.b.x, this.b.y);
		fill(255);
		ellipse(this.a.x, this.a.y, 4);
		if(this.end){
			fill(255,255,0);
			ellipse(this.end.x, this.end.y, 4);
		}
	}

	this.findEnd = other =>{
		let den = (other.v.y * this.v.x) - (other.v.x * this.v.y);
		if(!den){
			return;
		}
		let numa = (other.v.x * (this.a.y - other.a.y)) - 
				   (other.v.y * (this.a.x - other.a.x));
		let numb = (this.v.x * (this.a.y - other.a.y)) - 
				   (this.v.y * (this.a.x - other.a.x));
		let ua = numa/den;
		let ub = numb/den;
		let x = this.a.x + (ua * this.v.x);
		let y = this.a.y + (ua * this.v.y);

		if(ua > 0 && ub > 0){
			let candidate = createVector(x,y);
			let d1 = p5.Vector.dist(candidate, this.a);
			let d2 = p5.Vector.dist(candidate, other.a);
			let d = d1+d2;
			if(!this.end){
				this.end = candidate;
				this.previousD = d;
			}else if(d<this.previousD){
				this.previousD = d;
				this.end = candidate;
			}
		}
	}
}