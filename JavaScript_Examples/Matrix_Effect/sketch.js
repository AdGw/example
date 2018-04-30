let	symbolSize = 20;
	streams = [];


function setup(){
	createCanvas(
		window.innerWidth,
		window.innerHeight
		);
	background(0);
	let x = 0;
	let y = 0;
	for(let i = 0 ; i<width/ symbolSize;i++){
		let stream = new Stream();
		stream.generateSymbols(x,y);
		streams.push(stream);
		x+= symbolSize
	}
	textSize(symbolSize);
}

function draw(){
	background(0)
	streams.forEach(stream=>{
		stream.render();
	})
}

function Symbol(x,y,speed){
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(2,20));

	this.setToRandomSymbol=()=>{
	if(frameCount % this.switchInterval == 0){
		this.value = String.fromCharCode(
			0x30A0 + round(random(0,96))
			);
		}
	}
	this.charSpeed=()=>{
		this.y = (this.y >=height) ? 0: this.y+=this.speed;
	}
}

function Stream(){
	this.symbols = [];
	this.totalSymbols = round(random(5,30));
	this.speed = random(5,20)

	this.generateSymbols=(x,y)=>{
		for(let i = 0 ; i <= this.totalSymbols ; i++){
			symbol = new Symbol(x,y,this.speed);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y-= symbolSize;
		}
	}
	this.render = ()=>{
		this.symbols.forEach(symbol=>{
			fill(0,255,70)
			text(symbol.value, symbol.x, symbol.y);
			symbol.charSpeed();
			symbol.setToRandomSymbol();
		});
	}
}