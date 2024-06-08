let bubbles;
let peaks;


function preload() {
  bubbles = loadSound("bubbles.mp3");
}


// function for audio 
function setup() {
  createCanvas(400, 400);
  peaks = bubbles.getPeaks(width);
  bubbles.play();
  console.log(peaks);
}

function draw() {
  background(0);
  let t = map(bubbles.currentTime(), 0, bubbles.duration(), 0, width)
  
  //adjust the color of the line passing through
  stroke(300,30,700);
  line(t,0,t, height);
  
  //to generate more dots
  for (let i = 0; i < peaks.length; i++){
    point(i, height/2 + peaks[i]*400, i, height/1 - peaks[i]*400);
  }
}