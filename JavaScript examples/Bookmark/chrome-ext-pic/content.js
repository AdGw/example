console.log("x");

let file = ["img.jpg", "img2.jpg"];

let imgs = document.getElementsByTagName("img");
for(imgElt of imgs){
	let r = Math.floor(Math.random()*file.length);
	let f = "img/" + file[r];
	let url = chrome.extension.getURL(f);
	imgElt.src = url;
	console.log(url);
	console.log(imgElt.src);
}