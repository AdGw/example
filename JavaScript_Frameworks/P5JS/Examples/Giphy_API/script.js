let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=dc6zaTOxFJmzC";
let query = "&q=cat"


function setup(){
	noCanvas();
	let url = api + apiKey + query;
	loadJSON(url, gotData)
}

let gotData= gif =>{
	for(let i = 0; i< gif.data.length; i++){
		console.log(gif.data[i].images.original.url)
		createImg(gif.data[i].images.original.url)
	}
}