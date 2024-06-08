//for the bird 

function Bird() {
  this.y = height/2;
  this.x = 64;
  
// speed and velocity
  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;

  this.show = function() {
    
    //shape of bird, color
    fill(30,60,250);
    ellipse(this.x, this.y, 32, 32);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
