
let body = document.querySelector('body');
body.style.setProperty("--site-bg", "#afffff");
myVar = getComputedStyle(body).getPropertyValue("--site-bg");
console.log(myVar);