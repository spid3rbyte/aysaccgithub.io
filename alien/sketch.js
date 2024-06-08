function setup() {
  createCanvas(400, 400);
}

function draw() {
  // color 
  fill (450)
  fill("#FFC0CB");
  stroke("#800080");
  strokeWeight(3);
  push();
  ellipse(200, 150, 150, 100);
  // head
  background(220);
  ellipse(200, 150, 150, 100);
  // body
  ellipse(200, 250, 58, 100);
  // eyes
  ellipse(170, 140, 50, 30);
  ellipse(230, 140, 50, 30);
  ellipse(200, 177, 20, 29);
  pop();
  
  
}