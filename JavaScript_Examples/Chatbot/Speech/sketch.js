let speech;
function setup() {
  createCanvas(400,100);
  speech = new p5.Speech(); // speech synthesis object
  speech.started(startSpeaking);
  speech.ended(stopSpeaking);
  speech.speak("Hello");
}

let startSpeaking = () =>{
  background(0,255,0);
}

let stopSpeaking = () =>{
  background(255,0,0);
}

function mousePressed(){
  let voices = speech.voices;
  let voice = random(voices);
  console.log(voice.name);
  speech.setVoice(voice.name);
  speech.speak("Hello");
}