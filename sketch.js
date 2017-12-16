var amalfiX= 727;//949 originally 
var amalfiY=504;//986 originally
var montepulcianoX= 620;// 840 originally
var montepulcianoY=365;//originally 825
var firenzeX=575;
var firenzeY=307;
var cinqueterreX=501;//originally 717
var cinqueterreY=287;//originally 755
var milanX=485;//originally 700
var milanY=215;//originally 675
var milan, cinqueterre,firenze, montepulciano, amalfi;
var font;

function Intro (){ 

this.setup= function(){

//image(this.sceneManager.img1,0,0);
//image(this.sceneManager.img,width/2, height/2);
//image(this.sceneManager.img, width/4, height/4);

milan= new City(milanX,milanY,10,7,193,204, "Milano");// x, y, diameter, r, g, b, s
cinqueterre= new City(cinqueterreX, cinqueterreY,10,81,149,153, "Cinque Terre");
firenze= new City(firenzeX, firenzeY,10,34,255,143, "Firenze");
montepulciano= new City (montepulcianoX, montepulcianoY,10,255,98,118,"Montepulciano");
amalfi= new City (amalfiX,amalfiY,10,204,7,130, "Amalfi");

  imageMode(CENTER);
  image(this.sceneManager.img1,width/2,height/2);
  image(img, width/2, height/2);
  //imageMode(CENTER);
}

this.draw= function (){
  //image(this.sceneManager.img1,width/2,height/2);
  //image(img, img1.width/2, img1.height/2);

drawIntroScreen();


}


function drawIntroScreen(){

textFont(font);

//imageMode(CENTER);
//image(img, img1.width/2, img1.height/2); // ISSUE: When cities expand on mouseover, they go BEHIND this image. If I put the image in setup, it doesnt redraw...
milan.display();
cinqueterre.display();
firenze.display();
montepulciano.display();
amalfi.display();

milan.mouseover(mouseX, mouseY);
cinqueterre.mouseover(mouseX,mouseY);
firenze.mouseover(mouseX,mouseY);
montepulciano.mouseover(mouseX,mouseY);
amalfi.mouseover(mouseX,mouseY);

 

}
}



/*function setup(){

//create new object for each city

milan= new City(milanX,milanY,10,7,193,204, "Milano");// x, y, diameter, r, g, b, s
cinqueterre= new City(cinqueterreX, cinqueterreY,10,81,149,153, "Cinque Terre");
firenze= new City(firenzeX, firenzeY,10,34,255,143, "Firenze");
montepulciano= new City (montepulcianoX, montepulcianoY,10,255,98,118,"Montepulciano");
amalfi= new City (amalfiX,amalfiY,10,204,7,130, "Amalfi");

//Create canvas based on background image size; center background; 

cnv=createCanvas(1714, 1714);
centerCanvas();
background(img1);
//createCanvas(windowWidth, windowHeight);
imageMode(CENTER);// Allows image to be centered on screen
//image(img, width/2, height/2);

//font

textFont(font);

}
*/

/*function draw(){

//background(img1);

milan.display();
cinqueterre.display();
firenze.display();
montepulciano.display();
amalfi.display();


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
//text("hello", width/2, height/2);

  // crosshair tool for cities
/*
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);

  print("Mouse X is:  "); 
  print(mouseX);
  print(" Mouse Y is: ");
  print(mouseY);
*/

//original city function

/*city(milanX,milanY,7,193,204); // milan
city(cinqueterreX, cinqueterreY,81,149,153);// cinque terre
city (firenzeX, firenzeY,34,255,143);// firenze
city(montepulcianoX, montepulcianoY,255,98,118);//montepulciano
city (amalfiX,amalfiY,204,7,130);
*/
/*
milan.display();
cinqueterre.display();
firenze.display();
montepulciano.display();
amalfi.display();
/*
milan.mouseover(mouseX,mouseY);
cinqueterre.mouseover(mouseX,mouseY);
firenze.mouseover(mouseX,mouseY);
montepulciano.mouseover(mouseX,mouseY);
amalfi.mouseover(mouseX,mouseY);
*/
//grow();


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
