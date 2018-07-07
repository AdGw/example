let r,g,b;
let database;
function pickColor(){
	r = floor(random(256));
	g = floor(random(256));
	b = floor(random(256));
	background(r,g,b);
}


function setup(){
	let config = {
		apiKey: "AIzaSyCcq-9sW0-3WQ6zoLmzZ5UuXQLLebTRMbI",
		authDomain: "color-classification-ab7d3.firebaseapp.com",
		databaseURL: "https://color-classification-ab7d3.firebaseio.com",
		projectId: "color-classification-ab7d3",
		storageBucket: "color-classification-ab7d3.appspot.com",
		messagingSenderId: "574671660934"
	  };
	firebase.initializeApp(config);
	database = firebase.database();

	createCanvas(400,400);
	pickColor();

	let buttons = [];
	buttons.push(createButton('red'))
	buttons.push(createButton('green'))
	buttons.push(createButton('blue'))

	for(let i in buttons){
		buttons[i].mousePressed(sendData);
	}

	let submit = createButton("submit");
	submit.mousePressed(sendData)


}

function sendData(){
	console.log(this.html());
	let colorDatabase = database.ref("colors");
	let data = {
		r: r,
		g: g,
		b: b,
		label: this.html()
	  };
	console.log("saving");
	console.log(data);
	let color = colorDatabase.push(data, finished);
	console.log("Firebase generate key: " + color.key)

	function finished(err) {
		if (err) {
		  console.error("ooops, something went wrong.");
		  console.error(err);
		} else {
		  console.log('Data saved successfully');
		  pickColor();
		}
	}
}