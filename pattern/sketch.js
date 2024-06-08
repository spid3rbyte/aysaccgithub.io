var circleSize = 35; 
function setup() {
  createCanvas(400, 400);
  background(220);

translate(circleSize/1, circleSize/1);
  // the for loop is considering the width and height of the canvas 
  
for (var x = 0; x < width; x += circleSize) {
  for (var y = 0; y < height; y += circleSize) {
    fill (255,192,203);
    rect (x, y, circleSize *2.3, circleSize  *2.3);
    fill (128,0,128);
    rect (x, y, circleSize *0.8, circleSize *0.8);
    fill (128,0,128);
    ellipse (x, y, circleSize * 0.3, circleSize * 0.3);
    
  }
}
}
