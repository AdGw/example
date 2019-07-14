const points = [];
const hull = [];

let left;
let currentVertex;
let currentPoint;
let index = 2;
let nextIndex = -1;
let nextVertex;

function setup() {
	createCanvas(600, 600);
	for (let i = 0; i < 30; i++) {
		points.push(createVector(random(width), random(height)))
	}
	points.sort((a, b) => a.x - b.x);
	left = points[0];
	currentVertex = left;
	hull.push(currentVertex);
	nextVertex = points[1];
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(8);
	for (let p of points) {
		point(p.x, p.y)
	}
	stroke(0, 0, 255)
	fill(0, 0, 255, 50)
	beginShape();
	for (let p of hull) {
		vertex(p.x, p.y)
	}
	endShape();
	stroke(255, 0, 255);
	point(left.x, left.y)

	stroke(0, 255, 255);
	point(currentVertex.x, currentVertex.y)
	stroke(255, 255, 0);

	line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);
	let check = points[index];
	stroke(255);
	strokeWeight(2);
	line(currentVertex.x, currentVertex.y, check.x, check.y);

	const a = p5.Vector.sub(nextVertex, currentVertex);
	const b = p5.Vector.sub(check, currentVertex);
	const cross = a.cross(b);

	if (cross.z < 0) {
		nextVertex = check;
	}
	index = index + 1;
	if (index == points.length) {
		hull.push(nextVertex);
		currentVertex = nextVertex;
		index = 0;
	}

}