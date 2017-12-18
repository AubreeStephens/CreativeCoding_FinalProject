var img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13;
var cnv;
var font;
var maxImages= 5;
var imageIndex= 1;
var images= new Array(maxImages);

function preload(){

img= loadImage('data/home_italy.png');
img1=loadImage('data/see_tuscany_10.jpg');
font=loadFont("data/font1.otf");
img2= loadImage('data/see_milano_3.jpg');
img3= loadImage('data/eat_milano_1.jpg');
img4= loadImage('data/eat_milano_2.jpg');
img5=loadImage('data/eat_milano_3.jpg');
img6= loadImage('data/see_cinqueterre_2.jpg');
img7=loadImage('data/eat_cinqueterre_1.jpg');
img8= loadImage('data/see_firenze_1.jpg');
img9=loadImage('data/eat_firenze_4.jpg');
img10=loadImage('data/see_tuscany_5.jpg');
img11=loadImage('data/eat_tuscany_2.jpg');
img12=loadImage('data/see_amalfi_4.jpg');
img13=loadImage('data/eat_amalfi_1.jpg');
}

function setup(){


//Create canvas based on background image size; center background; 

cnv=createCanvas(img1.width, img1.height); //1288 x 781 (default firefox browser size)


textFont(font);

var mgr= new SceneManager();
mgr.img1= img1;
mgr.img=img;
//mgr.img= img2;
mgr.wire();
mgr.showScene(Intro);

//frameRate(5);
}


function centerCanvas() { //centers canvas 
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}


function windowResized() {
  centerCanvas();
}
