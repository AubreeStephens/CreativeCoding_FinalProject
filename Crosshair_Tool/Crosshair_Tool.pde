PImage img;
/*
Cross hairs sketch tool
 
click mouse to get x,y location
*/

void setup() {

  size(600, 600);
  img= loadImage("see_tuscany_10.jpg");
}

void draw() {
  background(0);
  image(img, 0, 0);
  stroke(0); 
  strokeWeight(1); // thickness

  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);

  print("Mouse X is:  "); 
  print(mouseX);
  print(" Mouse Y is: ");
  println(mouseY);
}