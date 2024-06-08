let labels = ["fps games", "indie games", "open world games", "gacha games"];
let numbers = [6, 4, 25, 10];


function setup() {
  createCanvas(600, 300);
  
  // to create and style the heading
let heading = createElement('h1', 'people who prefer FPS games, Indie games, open World games, and gacha games', 10, 40);
  heading.position(10, 10);  // 
  heading.style('font-size', '12.5px');

  // to change the color of each bar
  colorMode(HSB, 450, 200, 65, 360);
  background(0, 0, 100);
  noStroke();
  
  numbers = sort(numbers) // smallest to largest 
  // numbers = reverse(numbers); // largest to smallest 
  
  let barWidth = 100;
  let xOffset = 50;
  let yOffset = 50;


  for(var i = 0; i < numbers.length; i++) {
    var n = numbers[i];
    var x = map(i, 0, numbers.length, 0, width);
    var w = width/numbers.length;
    var h = map(n, 0, max(numbers), 0, height);
    var y = height - h;
    var c = map(n, 0, max(numbers), 0, 360);
    fill(c, 100, 100);
    rect(x, y, w, h);
    textAlign(CENTER, TOP)
    text(labels[i], x + barWidth / 2, height - yOffset + 10)
  }
}
