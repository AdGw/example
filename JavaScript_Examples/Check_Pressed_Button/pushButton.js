
let pushed = document.querySelector(".key");

function setContent(key){
	pushed.textContent = key;
}
// This function will get information about pushed key by user
function onKeyPushed(ev){
 let key = ev.key;
 setContent(key);
}
// keypress event will start onKeyPushed function
document.addEventListener("keypress", onKeyPushed);