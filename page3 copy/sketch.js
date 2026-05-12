function preload(){
  img = loadImage('sarah.png');
}

function setup() {
  createCanvas(1920, 1080);
  background(255);
}

function draw(){
  image(img, 655, 700);

}

function mousePressed() {
  fill(random(255), random(255), random(255));
  textSize(72);
  text("HA!", mouseX, mouseY);
}