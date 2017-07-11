let canvas = document.getElementById("game"),
	ctx = canvas.getContext('2d');

let k = 0;
let distance=10,
	object = {
    height: 5,
    width: 5,
    x: canvas.width/2,
    y: canvas.height/2, 
    color: "#ffffff"        
}


document.body.onkeypress=function(event){
    
    switch(event.keyCode){
        case 37: // 1
            object.x-=distance;      
            break;
        case 38: // 2
            object.y-=distance;
            break;
        case 39: // 3
            object.x+=distance;    
            break;
        case 40: // 4
            object.y+=distance;        
            break;
    }
    renderObject();
    // drawElapsedTime();
}
function renderObject(){
	console.log("x")
    if(ctx.fillStyle!=object.color.toLowerCase()){
        console.log(ctx.fillStyle,object.color);
        ctx.fillStyle=object.color;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(object.x, object.y, 5, k, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}
// newly spawned objects start at Y=25
let spawnLineY = 25;

// spawn a new object every 1500ms
let spawnRate = 50;

// set how fast the objects will fall
let spawnRateOfDescent = 1;

// when was the last object spawned
let lastSpawn = -1;

// this array holds all spawned object
let objects = [];

// save the starting time (used to calc elapsed time)
let startTime = Date.now();
// start animating


function spawnRandomObject() {

    // select a random type for this new object
    let t;

    // About Math.random()
    // Math.random() generates a semi-random number
    // between 0-1. So to randomly decide if the next object
    // will be A or B, we say if the random# is 0-.49 we
    // create A and if the random# is .50-1.00 we create B

    if (Math.random() < 0.50) {
        t = "red";
    } else {
        t = "blue";
    }

    // create the new object
    let object = {
        // set this objects type
        type: t,
        // set x randomly but at least 15px off the canvas edges
        x: Math.random() * (canvas.width - 30) + 15,
        // set y to start on the line where objects are spawned
        y: spawnLineY,
    }
    // add the new object to the objects[] array
    objects.push(object);
}



function animate() {
    // get the elapsed time
    let time = Date.now();

    // see if its time to spawn a new object
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
    }

    // request another animation frame
    requestAnimationFrame(animate);

    // clear the canvas so all objects can be 
    // redrawn in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);	

    // move each object down the canvas
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        object.y += spawnRateOfDescent;
        ctx.beginPath();
        ctx.arc(object.x, object.y, 8, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = object.type;
        ctx.fill();
    }
drawElapsedTime();
}
animate();

function drawElapsedTime() {
        var elapsed = parseInt((new Date() - startTime) / 1000);
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.font = "14px Verdana"
        // draw the running time at half opacity
        ctx.globalAlpha = 0.50;
        ctx.fillText(elapsed + " secs", canvas.width - 75, 25);
        ctx.restore();
    }