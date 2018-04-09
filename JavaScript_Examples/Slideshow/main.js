let i = 0;
let images = [];
let time = 3000;

images[0] = 'img1.jpg';
images[1] = 'img2.jpg';
images[2] = 'img3.jpg';

let change = () =>{
	document.slide.src = images[i];
	if(i<images.length -1){
		i++;
	}else{
		i=0;
	}
	setTimeout("change()",time);
}
window.onload = change;
