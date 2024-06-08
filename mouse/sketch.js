var d = 50;

function setup() {
  createCanvas(600, 400);
  background (0);
  noStroke();
  
  mouseX = -d;
  mouseY = -d;
}

function draw() {
  fill (350, 40, 60, 50); // color, transparency
  ellipse (mouseX, mouseY, 50, 50)
}