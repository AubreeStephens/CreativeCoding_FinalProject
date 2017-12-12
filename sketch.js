var img, img1;
var cnv;
var amalfiX= 949;
var amalfiY=986;
var montepulcianoX= 840;
var montepulcianoY=825;
var firenzeX=795;
var firenzeY=775;
var cinqueterreX=725;
var cinqueterreY=765;
var milanX=700;
var milanY=675;
var milan, cinqueterre,firenze, montepulciano, amalfi;
var z;

function preload(){
img= loadImage('data/home_italy.png');
img1=loadImage('data/see_tuscany_10.jpg');
}

function setup(){

milan= new City(milanX,milanY,10,7,193,204, "milan");// x, y, diameter, r, g, b, s
cinqueterre= new City(cinqueterreX, cinqueterreY,10,81,149,153, "cinque terre");
firenze= new City(firenzeX, firenzeY,10,34,255,143, "firenze");
montepulciano= new City (montepulcianoX, montepulcianoY,10,255,98,118,"montepulciano");
amalfi= new City (amalfiX,amalfiY,10,204,7,130, "amalfi");

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

  /*print("Mouse X is:  "); 
  print(mouseX);
  print(" Mouse Y is: ");
  print(mouseY);*/

/*city(milanX,milanY,7,193,204); // milan
city(cinqueterreX, cinqueterreY,81,149,153);// cinque terre
city (firenzeX, firenzeY,34,255,143);// firenze
city(montepulcianoX, montepulcianoY,255,98,118);//montepulciano
city (amalfiX,amalfiY,204,7,130);
*/

milan.display();
cinqueterre.display();
firenze.display();
montepulciano.display();
amalfi.display();
milan.mouseover(mouseX,mouseY);
cinqueterre.mouseover(mouseX,mouseY);
firenze.mouseover(mouseX,mouseY);
montepulciano.mouseover(mouseX,mouseY);
amalfi.mouseover(mouseX,mouseY);

//grow();

}

function city(x, y, r, g, b){

ellipseMode(CENTER);
noStroke(); 
ellipse(x, y, 10, 10);
fill (r, g, b);

}

function grow(){

z= z+10;
if (z>100){z =0;}


}

function centerCanvas() { //centers canvas 
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}


function windowResized() {
  centerCanvas();
}