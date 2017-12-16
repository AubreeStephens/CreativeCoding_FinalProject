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

// TO DO: ADD TITLES TO CITY PAGES, ADD EAT, SEE, LOVE, INSERT LOVE QUOTE, ADD MORE PICTURES FOR EATING AND SEEING, COMMENT CODE

function Intro (){ 

  this.setup= function(){

//image(this.sceneManager.img1,0,0);
//image(this.sceneManager.img,width/2, height/2);
//image(this.sceneManager.img, width/4, height/4);

    milan= new City(milanX,milanY,10,milanr,milang,milanb, "Milano");// x, y, diameter, r, g, b, s
    cinqueterre= new City(cinqueterreX, cinqueterreY,10,cinqueterrer,cinqueterreg,cinqueterreb, "Cinque Terre");
    firenze= new City(firenzeX, firenzeY,10,firenzer,firenzeg,firenzeb, "Firenze");
    montepulciano= new City (montepulcianoX, montepulcianoY,10,montepulcianor,montepulcianog,montepulcianob,"Montepulciano");
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
    if (key=='3'){
      this.sceneManager.showScene(Firenze);
    }
    if (key=='4'){
      this.sceneManager.showScene(Montepulciano);
    }
    if (key=='5'){
      this.sceneManager.showScene(Amalfi);
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

  var me= this;

  this.setup=function(){
 
    milan1= new Navigate ("Map-[0]", "", "Cinque Terre-[2]", milanr, milang, milanb);// display back and next
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
    cinqueterre2= new Navigate ("Milano-[1]", "Map-[0]", "Firenze[3]", cinqueterrer, cinqueterreg, cinqueterreb);
    background(0);
    }
  this.draw=function(){
    imageMode(CORNER);
    image(img7, 0, 0);//eat
    image(img6, width/2, 0);//see
    cinqueterre2.navigate();
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
    if (key=='3'){
      this.sceneManager.showScene(Firenze);
      }
  }
}

function Firenze(){
  var me= this;

  this.setup=function(){
    firenze3= new Navigate ("Cinque Terre-[2]", "Map-[0]", "Montepulciano[4]", firenzer, firenzeg, firenzeb);
    background(0);
    }
  this.draw=function(){
    imageMode(CORNER);
    image(img9, 0, 0);//eat
    image(img8, width/2, 0); //see
    firenze3.navigate();
    }

//0 to home, 2 back to Cinque Terre, 4 Next to montepulciano
  this.keyPressed=function(){
    if (key=='0'){
      this.sceneManager.showScene(Intro);
//center image on screen again, pop for site map to align to corner
      push(); 
      imageMode(CENTER);
      image(this.sceneManager.img1,width/2,height/2);
      image(img, width/2, height/2);
      pop();
      stroke(0);
      fill(0);
      siteMap();

       }
    if (key=='2'){
      this.sceneManager.showScene(CinqueTerre);
        }
    if (key=='4'){
      this.sceneManager.showScene(Montepulciano);
        }
}
}



function Montepulciano(){
  var me= this;

  this.setup=function(){
    montepuliano4= new Navigate ("Firenze-[3]", "Map-[0]", "Amalfi-[5]", montepulcianor, montepulcianog, montepulcianob);
    background(0);
    }
  this.draw=function(){
    imageMode(CORNER);
    image(img11, 0, 0);//eat
    image(img10, width/2, 0); //see
    montepuliano4.navigate();
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
      stroke(0);
      fill(0);
      siteMap();

      }
    if (key=='3'){
      this.sceneManager.showScene(Firenze);
      }
    if (key=='5'){
      this.sceneManager.showScene(Amalfi);
      }
}
}



function Amalfi(){
  var me= this;

  this.setup=function(){
    amalfi5= new Navigate ("Montepulciano-[4]", "", "Map[0]", montepulcianor, montepulcianog, montepulcianob);
    background(0);}

  this.draw=function(){
    imageMode(CORNER);
    image(img13, 0, 0);//eat
    image(img12, width/2, 0); //see
    amalfi5.navigate();
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
      stroke(0);
      fill(0);
      siteMap();
     }
    if (key=='4'){
      this.sceneManager.showScene(Montepulciano);
  }
}

}

// Lower navigation custom to each screen

class Navigate {
  constructor (b,h,n,red, green, blue){
   this.back=b;
   this.home=h;
   this.next=n; 
   this.r=red;
   this.g=green;
   this.b=blue;
}

  navigate(){

    textSize(30);
    fill(this.r, this.g, this.b);
    stroke(this.r, this.g, this.b);
    text (this.back, 50, 750);
    text (this.home, width/2-100, 750);
    text (this.next, width-225, 750);
  }
  
}