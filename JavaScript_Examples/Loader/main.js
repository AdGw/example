let ctx = document.getElementById("loader").getContext('2d');
let al = 0;
let start = 4.72;
let cw = ctx.canvas.width;
let ch = ctx.canvas.height;
let diff;

function simulation(){
    diff = ((al/100)*Math.PI*2*10).toFixed(2);
    ctx.clearRect(0,0,cw,ch);
    ctx.lineWidth = 10;
    ctx.fillStyle = '#09F';
    ctx.strokeStyle = "#09F";
    ctx.textAlign = "center";
    ctx.fillText(al + '%', cw*.5, ch*.5+2,cw);
    ctx.beginPath();
    ctx.arc(35,35,30, start, diff/10+start, false);
    ctx.stroke();
    al++;
    if(al == 100){
        al = 0;
    }
}
let sim = setInterval(simulation, 50);