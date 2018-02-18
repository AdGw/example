let canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	x = (canvas.width/2) + Math.floor(Math.random()*100) - 20;
	y = (canvas.height/2 + 100) + Math.floor(Math.random()*100) - 20;
	xSpeed = -6;
	ySpeed = -6;
	ballRadius = 25;
	paddleHeight = 20;
	paddleWidth = 200;
	paddleX = (canvas.width - paddleWidth)/2;
	rightPressed = false;
	leftPressed = false;
	brickRowCount = 4;
	brickColumnCount = 8;
	brickWidth = 75;
	brickHeight = 25;
	brickPadding = 10;
	brickOffsetTop = 70;
	brickOffsetLeft = 70;
	bricks = [];
	score = 0;
	lives = 3;
	level = 1;
	maxLevel = 3;
	paused = false;
	ball = new Image();
	ball.src = "https://cdn.pixabay.com/photo/2013/07/12/14/09/football-147854_960_720.png";
	
let initBricks = () =>{
	for(c=0;c<brickColumnCount;c++){
		bricks[c] = [];
		for(r=0;r<brickRowCount;r++){
			bricks[c][r] = {x: 0, y: 0, status: 1};
		}
	}
}
initBricks();
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

let drawBricks = () =>{
	for(c=0; c<brickColumnCount;c++){
		for(r=0; r<brickRowCount;r++){
			if(bricks[c][r].status == 1){
				let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;

				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX,brickY,brickWidth, brickHeight);
				ctx.fillStyle = "red";
				ctx.fill();
				ctx.closePath();
			}
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

	ctx.drawImage(ball, x,y, ballRadius, ballRadius);

}

let drawScore = () =>{
	ctx.fillStyle = "#D455DF";
	ctx.fillText("Score: " + score,10,50);
	ctx.font="30px Arial";
}

let drawLives = () =>{
	ctx.fillStyle = "#D455DF";
	ctx.font="30px Arial";
	ctx.fillText("Lives: " + lives, canvas.width - 110,50);
}

let drawLevel = () =>{
	ctx.fillStyle = "#D455DF";
	ctx.fillText("Level: " + level,350,50);
	ctx.font="30px Arial";
}

let collisionDetection = () =>{
	for(c=0;c<brickColumnCount;c++){
		for(r=0;r<brickRowCount;r++){
			let br = bricks[c][r];
			if(br.status == 1){
				if(x > br.x && x < br.x + brickWidth && y > br.y && y < br.y + brickHeight){
					ySpeed = -ySpeed;
					br.status = 0;
					score++;
					if(score == brickColumnCount * brickRowCount){
						if(level == maxLevel){
							alert("You Win!");
							document.location.reload();
						}else{
							level++;
							brickRowCount++;
							initBricks();
							score = 0;
							xSpeed +=1;
							ySpeed = -ySpeed;
							ySpeed +=1;
							x = (canvas.width/2) + Math.floor(Math.random()*100) - 20;
							y = (canvas.height/2 + 100) + Math.floor(Math.random()*100) - 20;
							paddleX = (canvas.width-paddleWidth);
							paused = true;
							ctx.beginPath();
							ctx.rect(0,0,canvas.width, canvas.height);
							ctx.fillStyle = '#0095DD';
							ctx.fill();
							ctx.font = '32px Arial';
							ctx.fillStyle = "#FFFFFF";
							ctx.fillText('Level ' + (level - 1) + ' completed', 280, canvas.height/2);
							setTimeout(function(){
								paused = false;
								draw();
							},1500);
						}
					}
				}
			}
		}
	}
}

let draw = () =>{
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawBall();
	drawBricks();
	drawPaddleX();
	collisionDetection();
	drawScore();
	drawLives();
	drawLevel();

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
			lives--;
			if(!lives){
				alert("Lost");
				document.location.reload();
			}else{
				x = (canvas.width/2) + Math.floor(Math.random()*100) - 20;
				ySpeed = -ySpeed;
				y = (canvas.height/2 + 100) + Math.floor(Math.random()*100) - 20;
				paddleX = (canvas.width-paddleWidth);
			}
		}
	}
	if(rightPressed && paddleX <= canvas.width - paddleWidth){
		paddleX += 8;
	} else if (leftPressed && paddleX >= 0){
		paddleX -= 8 ;
	}
	if(!paused){
		requestAnimationFrame(draw);
	}
}
draw();
