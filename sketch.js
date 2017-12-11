var img, img1;
var cnv;

function preload(){
img= loadImage('data/home_italy.png');
img1=loadImage('data/see_tuscany_10.jpg');
}

function setup(){

cnv=createCanvas(windowWidth, windowHeight);
  centerCanvas();
 background(img1);
//createCanvas(windowWidth, windowHeight);
imageMode(CENTER);// Allows image to be centered on screen
//image(img, windowWidth/2, windowHeight/2);

}

function draw(){

	// crosshair tool for cities
//background(img1);
image(img, windowWidth/2, windowHeight/2);
stroke(0);
strokeWeight(1); // thickness

  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);

  print("Mouse X is:  "); 
  print(mouseX);
  print(" Mouse Y is: ");
  print(mouseY);

ellipseMode(CENTER);
  ellipse (511, 41, 10, 10);//Milan
  fill(0);
}

function centerCanvas() { //centers canvas 
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}


function windowResized() {
  centerCanvas();
}