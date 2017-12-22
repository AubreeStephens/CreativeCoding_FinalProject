//city coordinates on map
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

// variable for objects
var milan, cinqueterre,firenze, montepulciano, amalfi; //variable for city object
var milan1, cinqueterre2, firenze3, montepuliano4, amalfi5;// variable for navigate object

//city RGB Colors
var milanr= 7; 
var milang=193;
var milanb=204;
var cinqueterrer=81; 
var cinqueterreg=149;
var cinqueterreb=153;
var firenzer=34;
var firenzeg=255;
var firenzeb=143;
var montepulcianor=255;
var montepulcianog=98;
var montepulcianob=118;
var amalfir=204;
var amalfig=7;
var amalfib=130;

// text related variables
var words;
var font;
// quote for each city
var sourceText1= "Cara Milano,\n meeting you was like\n listening to a song\n for the first time\n and knowing it would be my favorite.";
var sourceText2= "Cara Cinque Terre,\n I have found my perfect one.\n Let it be you.";
var sourceText3= "Cara Firenze,\n I have found shelter in you-\n a warm fulfilling place of rest\n amidst the storm.";
var sourceText4= "Cara Montepulciano,\n You inspire me to be the higher me.\n You are my piece of mind.";
var sourceText5= "Cara Amalfi,\n Thank you for being.";

// REVISION: Add sound clips (background into & Ambient, lots of issues with scribble sound), 
//            Re-write quotes (accomplished on central "post it"), multiple images (no luck)...

//Opening map of italy
function Intro (){ 

  this.setup= function(){

// declaare objects based on ciy class
    milan= new City(milanX,milanY,10,milanr,milang,milanb, "Milano");// x, y, diameter, r, g, b, s
    cinqueterre= new City(cinqueterreX, cinqueterreY,10,cinqueterrer,cinqueterreg,cinqueterreb, "Cinque Terre");
    firenze= new City(firenzeX, firenzeY,10,firenzer,firenzeg,firenzeb, "Firenze");
    montepulciano= new City (montepulcianoX, montepulcianoY,10,montepulcianor,montepulcianog,montepulcianob,"Montepulciano");
    amalfi= new City (amalfiX,amalfiY,10,amalfir,amalfig,amalfib, "Amalfi");

//display background image and map of italy in center
    imageMode(CENTER);
    image(this.sceneManager.img1,width/2,height/2);
    image(img, width/2, height/2);

//show site map text & play "Italian Music"
    siteMap();
    music.setVolume(0.1);
    music.play();

}
// Display dots and city names when mousedover
  this.draw= function (){

    drawIntroScreen();
  }


// each key navigates you to a city
  this.keyPressed= function (){
    if (key == '1'){
      this.sceneManager.showScene(Milan);
      introSwitch();
    }
    if (key=='2'){
      this.sceneManager.showScene(CinqueTerre);
      introSwitch(); 
    }
    if (key=='3'){
      this.sceneManager.showScene(Firenze);
      introSwitch();
    }
    if (key=='4'){
      this.sceneManager.showScene(Montepulciano);
      introSwitch();
    }
    if (key=='5'){
      this.sceneManager.showScene(Amalfi);
      introSwitch();
    }
}

//paused intro music and switches over to ambient music 
function introSwitch(){
      music.pause();
      italy.setVolume(0.05);
      italy.play();
}

//display each city location and name when moused over. 
function drawIntroScreen(){

  textFont(font);

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

//display sitemap on intro screen
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

  textAlign(LEFT);
  textSize(40);
  text('Eat', width-width/2.5, 200);
  textSize(50);
  text('See', width-width/3, 250);
  textSize(60);
  text ('Love', width- width/3.5, 300);
  textSize(70);
  text ('Italy', width-width/4, 350);
  }


function Milan (){
 

  var me= this;

//display title, two images and initialize navigation object
  this.setup=function(){

    milan1= new Navigate ("Map-[0]", "", "Cinque Terre-[2]", milanr, milang, milanb, "Milano");// display back and next
    background(0);
    imageMode(CORNER);
    image(img3, 0, 0);
    image(img2, width/2,0);
    }

//draw navigation text and post card in center with quote
  this.draw=function(){
   
    push();
    fill (milanr,milang,milanb);
    textSize (50);
    textStyle(BOLD);
    milan1.navigate();
    pop();

    scribbles(sourceText1);
 
    }

// key press either home or to the next city
  this.keyPressed=function(){
    if (key==0){
      this.sceneManager.showScene(Intro);

//center image on screen again, pop for site map to align to corner
      returnHome();
        }

      if (key=='2'){
        this.sceneManager.showScene(CinqueTerre);
        }
  }
  

}


function CinqueTerre(){
  var me= this;


  this.setup=function(){

    cinqueterre2= new Navigate ("Milano-[1]", "Map-[0]", "Firenze[3]", cinqueterrer, cinqueterreg, cinqueterreb, "Cinque Terre");
    background(0);
    imageMode(CORNER);
    image(img7, 0, 0);//eat
    image(img6, width/2, 0);//see
    }
  this.draw=function(){
   
    
    push();
    fill (cinqueterrer,cinqueterreg,cinqueterreb);
    textSize (50);
    textStyle(BOLD);
    cinqueterre2.navigate();
    pop();
    scribbles(sourceText2);
    }

//option for Home, Back of Next
  this.keyPressed=function(){
    if (key=='0'){
      this.sceneManager.showScene(Intro);
//center image on screen again, pop for site map to align to corner
      returnHome();
      }
    if (key == '1'){
      this.sceneManager.showScene(Milan);
      returnScreen(img3, img2);
      }
    if (key=='3'){
      this.sceneManager.showScene(Firenze);
      }
  }
}

function Firenze(){
  var me= this;

  this.setup=function(){

    firenze3= new Navigate ("Cinque Terre-[2]", "Map-[0]", "Montepulciano[4]", firenzer, firenzeg, firenzeb, "Firenze");
    background(0);
    imageMode(CORNER);
    image(img9, 0, 0);//eat
    image(img8, width/2, 0); //see
    }

  this.draw=function(){

  
    push();
    fill (firenzer,firenzeg,firenzeb);
    textSize (50);
    textStyle(BOLD);
    firenze3.navigate();
    pop();
    scribbles(sourceText3);
    }

//0 to home, 2 back to Cinque Terre, 4 Next to montepulciano
  this.keyPressed=function(){
    if (key=='0'){
      this.sceneManager.showScene(Intro);
//center image on screen again, pop for site map to align to corner
      returnHome();

       }
    if (key=='2'){
      this.sceneManager.showScene(CinqueTerre);
      returnScreen(img7, img6);
        }
    if (key=='4'){
      this.sceneManager.showScene(Montepulciano);
        }
}
}



function Montepulciano(){
  var me= this;

  this.setup=function(){

    montepuliano4= new Navigate ("Firenze-[3]", "Map-[0]", "Amalfi-[5]", montepulcianor, montepulcianog, montepulcianob, "Montepulciano");
    background(0);
    imageMode(CORNER);
    image(img11, 0, 0);//eat
    image(img10, width/2, 0); //see
    }
  this.draw=function(){

    push();
    fill (montepulcianor,montepulcianog,montepulcianob);
    textSize (50);
    textStyle(BOLD);
    montepuliano4.navigate();
    pop();
    scribbles(sourceText4);
    }

//0 to Home, 3 to Firenze, 5 to Amalfi
  this.keyPressed=function(){
    if (key=='0'){
      this.sceneManager.showScene(Intro);
//center image on screen again, pop for site map to align to corner
      returnHome();

      }
    if (key=='3'){
      this.sceneManager.showScene(Firenze);
      returnScreen(img9, img8);
      }
    if (key=='5'){
      this.sceneManager.showScene(Amalfi);
      }
}
}



function Amalfi(){
  var me= this;

  this.setup=function(){

    amalfi5= new Navigate ("Montepulciano-[4]", "", "Map[0]", montepulcianor, montepulcianog, montepulcianob, "Amalfi");
    background(0);
    imageMode(CORNER);
    image(img13, 0, 0);//eat
    image(img12, width/2, 0); //see

  }

  this.draw=function(){

    amalfi5.navigate();

    push();
    fill (amalfir,amalfig,amalfib);
    textSize (50);
    textStyle(BOLD);
    amalfi5.navigate();
    pop();
    scribbles(sourceText5);
    }

  this.keyPressed=function(){
    if (key=='0'){      
      background(0);
      this.sceneManager.showScene(Intro);
      push(); 
      imageMode(CENTER);
      image(this.sceneManager.img1,width/2,height/2);
      image(img, width/2, height/2);
      pop();
      stroke(0);
      fill(0);
      siteMap();
      italy.pause();
      music.play();

//center image on screen again, pop for site map to align to corner
     }
    if (key=='4'){
      this.sceneManager.showScene(Montepulciano);
      returnScreen(img11, img10);
  }
}

}

// Lower navigation custom to each screen

class Navigate {
  constructor (b,h,n,red, green, blue, m){
   this.back=b;
   this.home=h;
   this.next=n; 
   this.r=red;
   this.g=green;
   this.b=blue;
   this.name=m;
}

  navigate(){
    push();
    textSize(30);
    textAlign(CENTER);
    fill(this.r, this.g, this.b);
    stroke(this.r, this.g, this.b);
    text (this.back, 100, 750);
    text (this.home, width/2, 750);
    text (this.next, width-100, 750);
    textSize(42);
    text (this.name, width/2, 100);
    textSize(60);
    text ("Eat", width/4, height/2);
    text ("See", width- width/4, height/2);
    pop();
  }
  
}

//draw note
function note(){
  push();
  rectMode(CENTER);
  translate(width/2, 450);
  rotate(60*Math.PI/180);
  rect(0, 0, 300, 400);
  //tint(255,127);
  pop();
  fill (204,188,109,50);}

// write text on note
function write(x){
  //rotate and draw text
  push();
  translate(width/2, 450);
  rotate(330*Math.PI/180);
  textSize(30);
  textAlign(CENTER, CENTER);
  var middle= x.length/2;
  var left= middle- ((mouseX/(width/2))*middle);
  var right= middle + ((mouseX/(width/2)) *middle);
  fill(0);
  text(x.substring (left, right+1),0, 0);
  pop();

}

//text and note
function scribbles (x){
  note();
  write(x);
  //scribble.setVolume(0.05);// any scribble sound I use (from multiple sources) sounds horrible
  //scribble.play();
}

// reset when returning to intiial screen
function returnHome(){
      push(); 
      imageMode(CENTER);
      image(this.sceneManager.img1,width/2,height/2);
      image(img, width/2, height/2);
      pop();
      stroke(0);
      fill(0);
      siteMap();
      italy.pause();
      music.play();
    }

function returnScreen(y, z){
    background(0);
    imageMode(CORNER);
    image(y, 0, 0);//eat
    image(z, width/2, 0);//see
    }

