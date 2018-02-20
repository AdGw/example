
class Snow{

	constructor(){
		let x = random(width);
		let	y = random(-100 , -10);
		this.pos = createVector(x,y);
		this.vel = createVector(0,0);
		this.acc = createVector();
		this.size = random(5,30);
		this.terminalV = this.size
	}
	//Parallax effect
	applyForce(force){
		// let f = force.copy();
		// f.div(this.mass);
		let f = force.copy();
		f.mult(this.size)
		this.acc.add(f);

	}

	//function which add velocity to position
	//add velocity to positio every frame
	update(){
		this.vel.add(this.acc);
		this.vel.limit(this.size);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}
	//function which render flakes with certain size
	render(){
		stroke(255);
		strokeWeight(this.size);
		point(this.pos.x, this.pos.y);
	}

	offScreen(){
		return (this.pos.y > height + this.size);
	}
}