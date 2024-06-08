var word = "meow";
var font1;

function preload(){
  font1 = loadFont ("BlackOpsOne-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  fill(155,50,150); // color of the text
  textFont(font1, 100); // choosing the font + size
  textAlign(CENTER);
  text( word, width/2, height/2);
}