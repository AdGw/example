let	symbolSize = 30;
	streams = [];


function setup(){
	createCanvas(
		window.innerWidth,
		window.innerHeight
		);
	background(0);
	let x = 0;
	for(let i = 0 ; i<width/ symbolSize;i++){
		let stream = new Stream();
		stream.generateSymbols(x,random(-1000,0));
		streams.push(stream);
		x+= symbolSize
	}
	textSize(symbolSize);
}

function draw(){
	background(0, 100)
	streams.forEach(stream=>{
		stream.render();
	})
}

function Symbol(x,y,speed, first){
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.first = first;
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
		let first = round(random(0,4)) === 1;
		for(let i = 0 ; i <= this.totalSymbols ; i++){
			symbol = new Symbol(x,y,this.speed, first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y-= symbolSize;
			first = false;
		}
	}
	this.render = ()=>{
		this.symbols.forEach(symbol=>{
			if(symbol.first){
				fill(180,255,180);
			}else{
				fill(0,255,70)	
			}
			text(symbol.value, symbol.x, symbol.y);
			symbol.charSpeed();
			symbol.setToRandomSymbol();
		});
	}
}