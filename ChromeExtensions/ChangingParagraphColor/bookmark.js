(function(){
	console.log("Starting!");
	let paragraphs = document.getElementsByTagName("p");
	for(let i = 0; i< paragraphs.length;i++){
		paragraphs[i].innerHTML = 'hello';
	}
})();
