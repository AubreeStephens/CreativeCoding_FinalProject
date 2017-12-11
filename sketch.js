var img, img1;
var cnv;

function preload(){
img= loadImage('data/home_italy.png');
img1=loadImage('data/see_tuscany_10.jpg');
}

function setup(){

cnv=createCanvas(1714, 1714);
  centerCanvas();
 background(img1);
//createCanvas(windowWidth, windowHeight);
imageMode(CENTER);// Allows image to be centered on screen
//image(img, width/2, height/2);

}

function draw(){

	// crosshair tool for cities
//background(img1);
image(img, width/2, height/2);
stroke(0);
strokeWeight(1); // thickness

  //line(0, mouseY, width, mouseY);
  //line(mouseX, 0, mouseX, height);

  print("Mouse X is:  "); 
  print(mouseX);
  print(" Mouse Y is: ");
  print(mouseY);

ellipseMode(CENTER);
  ellipse (700, 675, 10, 10);//Milan
  fill(0);

ellipse (725, 765, 10, 10);//Cinque Terre
ellipse (795, 775, 10, 10);//Firenze
ellipse (840, 825, 10, 10);//Montepulciano
}

function centerCanvas() { //centers canvas 
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}


function windowResized() {
  centerCanvas();
}