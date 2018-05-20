function Edge(a, b){
	this.a = a;
	this.b = b;
	this.h1;
	this.h2;

	this.show = ()=>{
		stroke(255);
		line(this.a.x, this.a.y, this.b.x, this.b.y);
		this.h1.show();
		this.h2.show();
	}
	this.middle = ()=>{
		let mid = p5.Vector.add(this.a, this.b);
		mid.mult(0.5);
		let v1 = p5.Vector.sub(this.a, mid);
		let v2 = p5.Vector.sub(this.b, mid);
		v1.rotate(radians(-angle));
		v2.rotate(radians(angle));

		this.h1 = new Middle(mid,v1);
		this.h2 = new Middle(mid,v2);
	}

	this.findEnds = (edge)=>{
		this.h1.findEnd(edge.h1);
		this.h1.findEnd(edge.h2);
		this.h2.findEnd(edge.h1);
		this.h2.findEnd(edge.h2);
	}
}
