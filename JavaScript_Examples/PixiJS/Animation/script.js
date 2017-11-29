// set size of element with properties
PIXI.utils.sayHello();
let render = PIXI.autoDetectRenderer(1024,1024, {
	transparent:true,
	resolution: 1
});
let photo;
// add render view to element with display id
document.getElementById('display').appendChild(render.view);

let stage = new PIXI.Container();
let setup = () =>{
	stage.interactive = true;
	let rect = new PIXI.Rectangle(0,0,32,128);
	let	texture = PIXI.loader.resources['spritesheet3'].texture;
	texture.frame = rect;

	sprite = new PIXI.Sprite(texture);
	//set interval which respond for animation of image
	//this animation is made in loop
	let idle = setInterval(()=>{
		if(rect.x >=128 *5) rect.x = 0;
			rect.x += 128;
			sprite.texture.frame = rect;
	},250);
	sprite.scale.set(3,3);
	sprite.vx = 3;
	stage.addChild(sprite)
	animation();
}
// load image from folder/file
PIXI.loader
	.add('spritesheet3','images/spritesheet3.png')
	.load(setup);
let sprite;
let animation = () =>{
	requestAnimationFrame(animation);
	render.render(stage);
}
// event of moving image element when key has been pushed
window.addEventListener('keydown', (ev)=>{
	ev.preventDefault();
	sprite.x += sprite.vx;
});