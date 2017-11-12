chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
	console.log(message.txt)
	if(message.txt === "hello"){
		let paragraph = document.getElementsByTagName('p');
		for(elt of paragraph){
			elt.style['background-color'] = '#ff00ff';
		}
	}
}