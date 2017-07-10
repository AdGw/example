let canvas = document.getElementById('game');
	ctx = canvas.getContext('2d'),
	x = canvas.width/2,
	y = canvas.height/2;
	xSpeed = -7;
	ySpeed = -7;
	ballRadius = 10;

ctx.beginPath();
ctx.rect(20,40,20,150)
ctx.fillStyle = "#A47DD1";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(760,40,20,150)
ctx.fillStyle = "#A47DD1";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(x,y, 10, 0, Math.PI*2, false);
ctx.fillStyle = "#D455DF";
ctx.fill();
ctx.closePath();

let v = setInterval(draw, 10);

function drawBall(){
	ctx.beginPath();
	ctx.arc(x,y, ballRadius, 0, Math.PI*2, false);
	ctx.fillStyle = "#D455DF";
	ctx.fill();
	ctx.closePath();
}

function draw(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawBall();
		x += xSpeed;
	y += ySpeed;
	if(x >= canvas.width || x <= 0 ){
		xSpeed = -xSpeed;
	}
	if(y <= 0 || y >= canvas.height){
			ySpeed = -ySpeed;
	}
}
