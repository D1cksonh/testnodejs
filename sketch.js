// For sketch.html

var redX = 255;
var greenX = 0;
var blueX = 0;

function setup() {
  createCanvas(800, 800);
  background(100);
}

function draw() {
  if(keyIsPressed && key == 1){
    redX = 255;
  }
  
  if(keyIsPressed && key == 2){
    greenX = 255;
  }
  
  if(keyIsPressed && key == 3){
    blueX = 255;
  }
  
  if(keyIsPressed && key == 4){
    redX = 0;
    greenX = 0;
    blueX = 0;
  }
  
  if(keyIsPressed && key == 5){
    background(100);
  }
  if(mouseIsPressed){
    stroke(255,0,0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    fill(redX,greenX,blueX);
  }
}