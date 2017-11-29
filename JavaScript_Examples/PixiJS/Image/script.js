// set size of element with properties
PIXI.utils.sayHello();
let render = PIXI.autoDetectRenderer(512,512, {
	transparent:true,
	resolution: 1
});
let photo;
// add render view to element with display id
document.getElementById('display').appendChild(render.view);

let stage = new PIXI.Container();
// this function respond for being interactive
// set additional properties like scale. Image has been centered
let setup = () =>{
	stage.interactive = true;
	photo = new PIXI.Sprite(
		PIXI.loader.resources['photo'].texture
		);
	photo.interactive = true;
	photo.scale.set(0.3,0.3);
	photo.anchor.set(0.5,0.5);
	photo.pivot.set(50,0);
// Click events cause that image will be zoom in or zoom out
	photo.click = ()=>{
		photo.scale.x +=0.5;
		photo.scale.y +=0.5;
	}
	let element = document.getElementById('display');
	element.addEventListener("mousedown", (ev) =>{
    	if(ev.which == 3){
	        photo.scale.x -=0.5;
			photo.scale.y -=0.5;
	    }
	});
	stage.addChild(photo);
	animation();
}
// load image from folder/file
PIXI.loader
	.add('photo','images/photo.jpg')
	.load(setup);
// animation function will show rotation
// photo.rotation respond for speed of rotation
let animation = () =>{
	requestAnimationFrame(animation);

	photo.x = render.width /2;
	photo.y = render.height /2;

	photo.rotation +=0.01;
	render.render(stage);
}