let canvas = document.getElementById('game');
	ctx = canvas.getContext('2d'),
	x = canvas.width/2,
	y = canvas.height/2;
	xSpeed = -7;
	ySpeed = -7;
	ballRadius = 10;
	paddleHeight = 20;
	paddleWidth = 200;
	paddleX = (canvas.width - paddleWidth)/2;
	rightPressed = false;
	leftPressed = false;
	brickRowCount = 3;
	brickColumnCount = 8;
	brickWidth = 75;
	brickHeight = 20;
	brickPadding = 10;
	brickOffsetTop = 70;
	brickOffsetLeft = 70;
	bricks = [];
	for(c=0;c<brickColumnCount;c++){
		bricks[c] = [];
		for(r=0;r<brickRowCount;r++){
			bricks[c][r] = {x: 0, y: 0};
		}
	}
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

let drawBricks = () =>{
	for(c=0; c<brickColumnCount;c++){
		for(r=0; r<brickRowCount;r++){
			let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
			brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;

			bricks[c][r].x = brickX;
			bricks[c][r].y = brickY;
			ctx.beginPath();
			ctx.rect(brickX,brickY,brickWidth, brickHeight);
			ctx.fillStyle = "D455DF";
			ctx.fill();
			ctx.closePath();
		}
	}
}

function keyDownHandler(ev){
	if(ev.keyCode == 39){
		rightPressed = true;
	} else if(ev.keyCode == 37){
		leftPressed = true;
	}
}
function keyUpHandler(ev){
	if(ev.keyCode == 39){
		rightPressed = false;
	} else if(ev.keyCode == 37){
		leftPressed = false;
	}
}

let drawPaddleX = () =>{
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#D455DF";
	ctx.fill();
	ctx.closePath();
}

let drawBall = () =>{
	ctx.beginPath();
	ctx.arc(x,y, ballRadius, 0, Math.PI*2, false);
	ctx.fillStyle = "#D455DF";
	ctx.fill();
	ctx.closePath();
}

let draw = () =>{
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawBall();
	drawBricks();
	drawPaddleX();
	x += xSpeed;
	y += ySpeed;
	if(x >= canvas.width || x <= 0 ){
		xSpeed = -xSpeed;
	}
	if(y + ySpeed <= ballRadius){
			ySpeed = -ySpeed;
	} else if(y+ySpeed >= canvas.height - ballRadius){
		if(x > paddleX && x < paddleX + paddleWidth){
			ySpeed = -ySpeed;
		} else{
			alert("Game Over");
			document.location.reload();
		}
	}
	if(rightPressed && paddleX <= canvas.width - paddleWidth){
		paddleX += 7;
	} else if (leftPressed && paddleX >= 0){
		paddleX -= 7 ;
	}
}

let v = setInterval(draw, 10);