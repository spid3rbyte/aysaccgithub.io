let img;

function preload(){
  img=loadImage('flower.jpg')
}
function setup() {
  createCanvas(700, 700);
  background(190,220,250);

//image inside shape, using mask function - works with multiple shapes
img.resize(200,200);
  
let cnv5 = createGraphics(200,200);
//cnv5.circle(500,100,350);
cnv5.ellipse(0,100,100,200,450,100);
img.mask(cnv5);
image(img,300,100);
}