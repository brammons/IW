var y = 400;
var d = 40;


h1 = 200;
h2 = 300;

function preload(){
  img = loadImage("field.jpeg")
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function draw() {

  image(img, 0, 0);  
  
  fill(0);
  
  rect(width/4, y, width/2, height);
  
  noStroke()
  fill(0)
  
  
  if(mouseY < height/2){
  y--;
    
  } else if (mouseY > height/2){
  
  y++;
    
  }
  
  
}