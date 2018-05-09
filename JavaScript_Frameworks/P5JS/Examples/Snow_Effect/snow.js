// randomSize function ensure to create more small flakes
// than the big ones.
randomSize = () => {
	let r = pow(random(0.2,1),3);
	return constrain(r * 32, 2 , 32);
}

class Snow{

	constructor(sx,sy,img){

		let x = sx || random(width);
		let	y = sy || random(-100 , -10);
		this.img = img;
		this.pos = createVector(x,y);
		this.vel = createVector(0,0);
		this.acc = createVector();
		this.ang = random(TWO_PI);
		this.dir = (random(1) > 0.5) ? 1 : -1;
		this.xoff = 0;
		this.size = randomSize();

	}
	
	applyForce(force){
		let f = force.copy();
		f.mult(this.size);
		this.acc.add(f);

	}

	randomize(){
		let x = random(width);
		let	y = random(-100 , -10);
		this.pos = createVector(x,y);
		this.vel = createVector(0,0);
		this.acc = createVector();
		this.size = randomSize()

	}

	//function which add velocity to position
	//add velocity to position every frame
	update(){

		this.xoff = sin(this.ang * 2) * 2 * this.size;

		this.vel.add(this.acc);
		this.vel.limit(this.size* 0.2);

		if(this.vel.mag() < 1){
			this.vel.normalize();
		}

		this.pos.add(this.vel);
		this.acc.mult(0);

		if(this.pos.y > height + this.size){
			this.randomize();
		}
	// Wrapping Left and Right
	    if (this.pos.x < -this.size) {
	      this.pos.x = width + this.size;
	    }
	    if (this.pos.x > width + this.size) {
	      this.pos.x = -this.size;
	    }
	//vel.mag/200 ensure moving flakes more fluently
		this.ang += this.dir * this.vel.mag()/200;
	}
	//function which render flakes with certain size with rotation
	render(){

		push();
		translate(this.pos.x + this.xoff, this.pos.y);
		rotate(this.ang);
		imageMode(CENTER);
		image(this.img, 0 , 0, this.size, this.size);
		pop();
	}

}