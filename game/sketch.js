
//function for flappy bird and pupes
var bird;
var pipes = [];

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    //if the bird hits the pipe, it shows "HIT"
    if (pipes[i].hits(bird)) {
      console.log("HIT");
      text("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

//if space is pressed, the bird will fly up
function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
