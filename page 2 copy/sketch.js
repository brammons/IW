var d = [];

function preload(){
  img = loadImage("die.png");
  font = loadFont('DISKOTEQUE copy.TTF');
}

function setup() {
    background(0);
  createCanvas(500, 500);
  for (i = 0; i < 25; i++) {
    d[i] = new Die(200, 200, random(20, 70));
  }
}
function draw() {
  background(0);
  for (k = 0; k < 25; k++) {
    d[k].move();
    d[k].bounce();
    d[k].display();
  }
  textAlign(CENTER);
  textFont(font);
  textSize(100);
  text('The Harder You Bet', width/2, height/2);
  fill(255);
}

class Die {

  constructor(tempX, tempY, tempSize) {
  
    this.x = tempX;
    this.y = tempY;
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
    this.size = tempSize;
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }

  display() {
    noStroke();
    image(img, this.x, this.y, this.size, this.size);
  }

}