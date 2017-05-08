let photo = document.querySelector(".photo");
	mag = null;
	zoom = null;

function createMagnifier(){
	let magElement = document.createElement('div');
	magElement.classList.add('magnifier');
	mag = magElement;
	photo.appendChild(magElement);
}

function removeMagnifier(){
	if(mag){
	photo.removeChild(mag);
	mag = null;
	}
}

function createZoom(){
	let zoomElement = document.createElement('div');
	zoomElement.classList.add("zoom");
	zoom = zoomElement;
	document.body.appendChild(zoomElement);
}

function removeZoom(){
	if(zoom){
	document.body.removeChild(zoom);
	zoom=null;
	}
}

function enterMouse(){
	createMagnifier();
	createZoom();
}

function leaveMouse(){
	removeMagnifier();
	removeZoom();
}

function onMouseMove(ev){
	let photoBounding = this.getBoundingClientRect(),
	x = ev.clientX - photoBounding.left,
	y = ev.clientY - photoBounding.top,
	photoSize = parseInt(window.getComputedStyle(photo).height)
	magSize = parseInt(window.getComputedStyle(mag).height)
	maxPosition = photoSize - magSize;
	x -= magSize/2;
	y -= magSize/2;

	if(x + magSize > photoSize){
		x = maxPosition;
	}

	if(x < 0){
		x = 0;
	}

	if(y + magSize > photoSize){
		y = maxPosition;
	}

	if(y < 0){
		y = 0;
	}

	let transformCSS = "translateX("+ x +"px)translateY("+ y +"px)";
	mag.style.transform = transformCSS;
	zoom.style.backgroundPosition = -x*2 + "px " + -y * 2 + "px";
}

photo.addEventListener('mouseenter', enterMouse);
photo.addEventListener('mouseleave', leaveMouse);
photo.addEventListener('mousemove', onMouseMove)