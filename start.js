var img, img1;
var cnv;
/*
var amalfiX= 949;
var amalfiY=986;
var montepulcianoX= 840;
var montepulcianoY=825;
var firenzeX=795;
var firenzeY=785;
var cinqueterreX=717;
var cinqueterreY=755;
var milanX=700;
var milanY=675;
var milan, cinqueterre,firenze, montepulciano, amalfi;*/
var font;

function preload(){

img= loadImage('data/home_italy.png');
img1=loadImage('data/see_tuscany_10.jpg');
font=loadFont("data/font1.otf");
}

function setup(){
/*
milan= new City(milanX,milanY,10,7,193,204, "Milano");// x, y, diameter, r, g, b, s
cinqueterre= new City(cinqueterreX, cinqueterreY,10,81,149,153, "Cinque Terre");
firenze= new City(firenzeX, firenzeY,10,34,255,143, "Firenze");
montepulciano= new City (montepulcianoX, montepulcianoY,10,255,98,118,"Montepulciano");
amalfi= new City (amalfiX,amalfiY,10,204,7,130, "Amalfi");
*/

//Create canvas based on background image size; center background; 

cnv=createCanvas(img1.width, img1.height); //1288 x 781 (default firefox browser size)
//centerCanvas();
//background(img1);
//createCanvas(windowWidth, windowHeight);
//imageMode(CENTER);// Allows image to be centered on screen
//image(img, width/2, height/2);

//font

textFont(font);

var mgr= new SceneManager();
mgr.img1= img1;
mgr.img=img;
mgr.wire();
mgr.showScene(Intro);

}
/*
function drawIntroScreen(){

image(img, width/2, height/2); // ISSUE: When cities expand on mouseover, they go BEHIND this image. If I put the image in setup, it doesnt redraw...

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

textSize(28);
}
*/

function centerCanvas() { //centers canvas 
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}


function windowResized() {
  centerCanvas();
}
