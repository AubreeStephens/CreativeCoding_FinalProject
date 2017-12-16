class City{
	constructor(x, y, diameter, r, g, b, s){
		this.x= x;
		this.y= y;
		this.diameter= diameter;
		this.r= r; 
		this.g= g;
		this.b= b;
		this.name=s;
		this.over= false;
	}
mouseover(px, py){
		var d= dist( px, py, this.x, this.y);
		if (d<this.diameter/2){
			this.diameter++;// increment diameter when mouse is in the vicinity
			this.over = true; 
			 if (this.diameter>20){
			this.diameter=10; //freeze the circle with Text ** Need to fix this!
			}
     else {
      this.over = false;
}
}
}

display(){

//city dot
	noStroke();
	fill(this.r, this.g, this.b);
	ellipse(this.x, this.y, this.diameter, this.diameter);
//city text
	 if (this.over) {
      textAlign(CENTER);
      noStroke();
      //stroke(0);
      fill(this.r, this.g, this.b);
      textSize(32);
      text(this.name, this.x+ this.diameter/2+10, this.y - this.diameter/2-10); //text appears slightly above and to right of the dot
    }
  }
	
}
