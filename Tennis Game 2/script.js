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

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

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