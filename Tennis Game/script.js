let canvas,
	canvasContext,
	ballX = 0,
	ballY = 0,
	ballSpeedX = 3,
	ballSpeedY = 2,
	white = '#ffffff',
	paddle1Position = 250,
	paddle2Position = 250,
	paddleThickness = 10,
	paddleHeight = 100,
	player1Score = 0,
	player2Score = 0;

let mousePosition = (ev) =>{
	let rect = canvas.getBoundingClientRect();
	let root = document.documentElement;
	let mouseX = ev.clientX - rect.left - root.scrollLeft;
	let mouseY = ev.clientY - rect.top - root.scrollTop;
	return {
		x: mouseX,
		y: mouseY
	};
}

window.onload = () =>{
	canvas = document.getElementById('gameWindow');
	canvasContext = canvas.getContext('2d');

	let framesPerSecond = 60;
	setInterval(() =>{
		moveElements();
		drawEverything();
	}), 1000/framesPerSecond;
	canvas.addEventListener("mousemove", (ev) =>{
		let mousePos = mousePosition(ev);
			paddle1Position = mousePos.y - paddleHeight/2;
			if(paddle1Position <=0 && paddle2Position <= 0){
				paddle1Position = 0;
				paddle2Position = 0;

			}
			if(paddle1Position >= canvas.height - paddleHeight &&
				paddle2Position >= canvas.height - paddleHeight){
				paddle1Position = canvas.height - paddleHeight;				
				paddle2Position = canvas.height - paddleHeight;
			}
	});
}

let ballReset = () =>{
	ballSpeedX = -ballSpeedX;
	ballX = canvas.width/2 * Math.random();
	ballY = canvas.height/2 * Math.random();
}

let enemy = () =>{
	let paddleEnemy = paddle2Position + (paddleHeight/2);
	if(paddleEnemy < ballY- 35){
		paddle2Position += 6;
	}else{
		paddle2Position -= 6;
	}
}

let moveElements = () =>{
	enemy();
	ballX +=ballSpeedX;
	ballY +=ballSpeedY;
	if (ballX < 0){
		if(ballY > paddle1Position && ballY < paddle1Position + paddleHeight){
			ballSpeedX = -ballSpeedX;
			let deltaY = ballY - (paddle1Position + paddleHeight/2);
			ballSpeedY = deltaY * 0.2;
		}else{
			ballReset();
			player2Score ++;
			if(player2Score == 10){
				alert("player2 won");
				player1Score = 0;
				player2Score = 0;
			}
		}
	}
	if (ballX >= canvas.width){
		if(ballY > paddle2Position && ballY < paddle2Position + paddleHeight){
			ballSpeedX = -ballSpeedX;
			let deltaY = ballY - (paddle2Position + paddleHeight/2);
			ballSpeedY = deltaY * 0.2;
		}else{
			ballReset();
			player1Score ++;
			if(player1Score == 10){
				alert("player1 won");
				player1Score = 0;
				player2Score = 0;
			}
		}
	}
	if(ballY <=0){
		ballSpeedY = -ballSpeedY;
	}
	if (ballY >= canvas.height){
		ballSpeedY = -ballSpeedY;
	}

}

let drawNet = () =>{
	for(let i = 0; i<canvas.height; i+=40){
		colorRect(canvas.width/2-1, i, 2, 20, white);
	// console.log(i)
	}
}

let drawEverything = () =>{
	colorRect(0,0,canvas.width,canvas.height, '#000000');
	drawNet();
	colorRect(0,paddle1Position,paddleThickness,paddleHeight, white);
	colorRect(canvas.width- paddleThickness,paddle2Position,paddleThickness,paddleHeight, white);
	colorCircle(ballX, ballY, 10, white);

	canvasContext.font = "30px Verdana";
	canvasContext.fillText(player1Score + " /10", 100, 150);	
	canvasContext.fillText(player2Score + " /10", canvas.width-100, 150);

}

let colorCircle = (centerX, centerY, radius, drawColor) =>{
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
}

let colorRect = (leftX, topY, width, height, drawColor) =>{
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY,width, height);
}