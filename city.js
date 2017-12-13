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
			 if (this.diameter>15){
			this.diameter--; //freeze the circle with Text
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
      //noStroke();
      stroke(0);
      fill(0);
      textSize(32);
      text(this.name, this.x+ this.diameter/2+ 40, this.y - this.diameter/2-0); //text appears slightly above and to right of the dot
    }
  }
	
}