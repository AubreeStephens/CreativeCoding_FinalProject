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
var maxImages = 5; // Total # of images
var imageIndex = 1; // Initial image to be displayed is the first*/

// Declaring an array of images.
var images = new Array(maxImages);
//var i;
var words;
var milanquote= 'Cara Milano,\n meeting you was like\n listening to a song\n for the first time\n and knowing it would be my favorite.';


// TO DO: ADD TITLES TO CITY PAGES, ADD EAT, SEE, LOVE, INSERT LOVE QUOTE, ADD MORE PICTURES FOR EATING AND SEEING, COMMENT CODE
//Get multiple images to load: Example 15-4: Image sequence

function Intro (){ 

  this.setup= function(){

//image(this.sceneManager.img1,0,0);
//image(this.sceneManager.img,width/2, height/2);
//image(this.sceneManager.img, width/4, height/4);

    milan= new City(milanX,milanY,10,milanr,milang,milanb, "Milano");// x, y, diameter, r, g, b, s
    cinqueterre= new City(cinqueterreX, cinqueterreY,10,cinqueterrer,cinqueterreg,cinqueterreb, "Cinque Terre");
    firenze= new City(firenzeX, firenzeY,10,firenzer,firenzeg,firenzeb, "Firenze");
    montepulciano= new City (montepulcianoX, montepulcianoY,10,montepulcianor,montepulcianog,montepulcianob,"Montepulciano");
    amalfi= new City (amalfiX,amalfiY,10,amalfir,amalfig,amalfib, "Amalfi");

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
  //var maxImages= 5;
  //var imageIndex= 1;
  //var images= new Array(maxImages);
  var headlines= [
  "'Cara Milano, meeting you was like listening to a song for the first time and knowing it would be my favorite.'"];
  //var x;
  var index =0;

  this.setup=function(){

   // x=width;
    milan1= new Navigate ("Map-[0]", "", "Cinque Terre-[2]", milanr, milang, milanb, "Milano");// display back and next
    background(0);
    imageMode(CORNER);
    image(img3, 0, 0);
    image(img2, width/2,0);
  
    }
  this.draw=function(){
    //textAlign(LEFT);
    //imageMode(CORNER);
    //image(img2, width/2,0);
    //image(img3, 0, 0);
    push();
    fill (milanr,milang,milanb);
    textSize (50);
    textStyle(BOLD);
    milan1.navigate();
    pop();
    //textSize (50);
    //textStyle(BOLD);
    //fill (milanr,milang,milanb);
    //text (headlines[index], x, height-200);
    //x= x-2;

    setTimeout(write, 5000);

    

    //set.timeout(image(img4, width/2, 0));

    /*imageIndex= (imageIndex+1) % images.length;
    if (imageIndex >5){
      imageIndex=1;
    }*/
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
  var headlines= [
  "'Cara Cinque Terre, I have found my perfect one. Let it be you.'"];
  var x;
  var index =0;

  this.setup=function(){
    x=width;
    cinqueterre2= new Navigate ("Milano-[1]", "Map-[0]", "Firenze[3]", cinqueterrer, cinqueterreg, cinqueterreb, "Cinque Terre");
    background(0);
    }
  this.draw=function(){
   
    imageMode(CORNER);
    image(img7, 0, 0);//eat
    image(img6, width/2, 0);//see
    cinqueterre2.navigate();
    
    //scrolling text
    textAlign(LEFT);
    textSize (50);
    textStyle(BOLD);
    fill (cinqueterrer,cinqueterreg,cinqueterreb);
    text (headlines[index], x, height-200);
    x= x-2;
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
  var headlines= [
  "'Cara Firenze, I have found shelter in you- a warm fulfilling place of rest amidst the storm.'"];
  var x;
  var index =0;

  this.setup=function(){
    x=width;
    firenze3= new Navigate ("Cinque Terre-[2]", "Map-[0]", "Montepulciano[4]", firenzer, firenzeg, firenzeb, "Firenze");
    background(0);
    }
  this.draw=function(){
    imageMode(CORNER);
    image(img9, 0, 0);//eat
    image(img8, width/2, 0); //see
    firenze3.navigate();

    textAlign(LEFT);
    textSize (50);
    textStyle(BOLD);
    fill (firenzer,firenzeg,firenzeb);
    text (headlines[index], x, height-200);
    x= x-2;
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

  var headlines= [
  "'Cara Montepulciano, You inspire me to be the higher me. You are my piece of mind.'"];
  var x;
  var index =0;

  this.setup=function(){
     x=width;
    montepuliano4= new Navigate ("Firenze-[3]", "Map-[0]", "Amalfi-[5]", montepulcianor, montepulcianog, montepulcianob, "Montepulciano");
    background(0);
    }
  this.draw=function(){
    imageMode(CORNER);
    image(img11, 0, 0);//eat
    image(img10, width/2, 0); //see
    montepuliano4.navigate();

    textAlign(LEFT);
    textSize (50);
    textStyle(BOLD);
    fill (montepulcianor,montepulcianog,montepulcianob);
    text (headlines[index], x, height-200);
    x= x-2;
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
  var headlines= [
  "'Cara Amalfi, Thank you for being.'"];
  var x;
  var index =0;

  this.setup=function(){
     x=width;
    amalfi5= new Navigate ("Montepulciano-[4]", "", "Map[0]", montepulcianor, montepulcianog, montepulcianob, "Amalfi");
    background(0);}

  this.draw=function(){
    imageMode(CORNER);
    image(img13, 0, 0);//eat
    image(img12, width/2, 0); //see
    amalfi5.navigate();

    textAlign(LEFT);
    textSize (50);
    textStyle(BOLD);
    fill (amalfir, amalfig, amalfib);
    text (headlines[index], x, height-200);
    x= x-1;
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

function drawNew(i){
image(i, width/2, 0);
}

function write(){
  var sourceText = "Cara Milano,\n meeting you was like\n listening to a song\n for the first time\n and knowing it would be my favorite.";
  push();
  rectMode(CENTER);
  translate(width/2, 450);
  rotate(60*Math.PI/180);
  rect(0, 0, 300, 400);
  //tint(255,127);
  pop();
  fill (204,188,109,50);

//rotate and draw text
  push();
  translate(width/2, 450);
  rotate(330*Math.PI/180);
  textSize(30);
  textAlign(CENTER, CENTER);
  var middle= sourceText.length/2;
  var left= middle- ((mouseX/(width/2))*middle);
  var right= middle + ((mouseX/(width/2)) *middle);
  fill(0);
  text(sourceText.substring (left, right+1),0, 0);
  pop();
}
