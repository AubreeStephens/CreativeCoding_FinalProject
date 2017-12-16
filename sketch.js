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
var milan1, cinqueterre2, firenze3, montepuliano4, amalfi5;
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

siteMap();

}

this.draw= function (){
  //image(this.sceneManager.img1,width/2,height/2);
  //image(img, img1.width/2, img1.height/2);

drawIntroScreen();



}

this.keyPressed= function (){
  if (key == '1'){
  this.sceneManager.showScene(Milan);
  }
  if (key=='2'){
    this.sceneManager.showScene(CinqueTerre);
  }
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

function siteMap(){
fill (0);
textSize (40);
text("Press the following keys to travel to each city", 50, 75);
textSize(28);
text ('[1]- Milano', 175, 125);
text ('[2]- Cinque Terre', 175, 175);
text ('[3]- Firenze', 175, 225);
text ('[4]-Montepulciano',175, 275);
text ('[5]-Amalfi', 175, 325);
}


function Milan (){

//milan1= new Navigate ("Back-[0]", "Home-[0]", "Cinque Terre-[2]");

var me= this;

this.setup=function(){
  milan1= new Navigate ("Back-[0]", "Home-[0]", "Cinque Terre-[2]");
  background(0);

}
this.draw=function(){

imageMode(CORNER);
image(img2, width/2, 0);
image(img3, 0, 0);
milan1.navigate();
}

this.keyPressed=function(){
  if (key==0){
    this.sceneManager.showScene(Intro);
//center image on screen again, pop for site map to align to corner
    push(); 
    imageMode(CENTER);
    image(this.sceneManager.img1,width/2,height/2);
    image(img, width/2, height/2);
    pop();
    siteMap();

  }

   if (key=='2'){
    this.sceneManager.showScene(CinqueTerre);
  }
}
}

function CinqueTerre(){
  var me= this;

  this.setup=function(){
  background(0);
}
  this.draw=function(){
  imageMode(CORNER);
  image(img6, 0, 0);
  image(img7, width/2, 0);
  
  }

  this.keyPressed=function(){
  if (key=='0'){
    this.sceneManager.showScene(Intro);
//center image on screen again, pop for site map to align to corner
    push(); 
    imageMode(CENTER);
    image(this.sceneManager.img1,width/2,height/2);
    image(img, width/2, height/2);
    pop();
    siteMap();

  }
   if (key == '1'){
  this.sceneManager.showScene(Milan);
  }

}
}

class Navigate {
constructor (b,h,n){
 this.back=b;
 this.home=h;
 this.next=n; 
}
navigate(){

textSize(30);
  fill(0);
  text (this.back, 50, 750);
  text (this.home, width/2, 750);
  text (this.next, width-50, 750);
}
  
}