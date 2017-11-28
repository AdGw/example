console.log("Background running");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
	console.log("Button Clicked");
	let msg = {
		txt: "hello"
	}
	chrome.tabs.sendMessage(tab.id, msg);
}