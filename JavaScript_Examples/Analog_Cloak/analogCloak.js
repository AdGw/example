// get three elements and set for each specifically date
// hours, minutes and seconds
let hour = document.querySelector(".hour.animate"),
	minute = document.querySelector(".minute.animate"),
	second = document.querySelector(".second.animate");
	now = new Date();

// function will shows actually date from local date and set
// it to analog clock
function setupCloak(){
    let sec = now.getSeconds(),
	min = now.getMinutes() * 60,
	h = now.getHours() * 3600;
	hour.style.animationDelay = "-" + h + "s";
	minute.style.animationDelay = "-" + min + "s";
	second.style.animationDelay = "-" + sec + "s";
}

setupCloak();