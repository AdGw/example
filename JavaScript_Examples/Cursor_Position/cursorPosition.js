let positionX = document.querySelector("#posX");
let positionY = document.querySelector("#posY");

// this Function will get actually position of mouse
// then shows position X, Y by textContent
function onMouseMove(ev){
	let posX = ev.clientX;
	let posY = ev.clientY;

	positionX.textContent = posX;
	positionY.textContent = posY;
}
// mousemove event will start onMouseMove function
document.addEventListener("mousemove", onMouseMove);