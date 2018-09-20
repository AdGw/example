let brain

function setup(){
  noCanvas();
  brain = new NeuralNetwork(2, 4, 1);
  let child = brain.copy();
  child.mutate();

}