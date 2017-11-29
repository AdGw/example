
let s = function(sketch){
	 sketch.setup = function(){
		let h = document.body.clientHeight;
		let c = sketch.createCanvas(sketch.windowWidth,h);
		c.position(0,0);
		c.style("pointer-events", "none");
		sketch.clear();
	}

	sketch.draw = function(){
		sketch.stroke(0);
		sketch.strokeWeight(0.1);
		sketch.line(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY);
	}	
}
let myp5 = new p5(s);
