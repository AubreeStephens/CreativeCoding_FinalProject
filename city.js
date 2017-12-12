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
			this.diameter++;
			if (this.diameter>50){
				this.diameter-=40;
			}
	}
}

	display(){
	noStroke();
	fill(this.r, this.g, this.b);
	ellipse(this.x, this.y, this.diameter, this.diameter);
	 if (this.over) {
      textAlign(CENTER);
      noStroke();
      fill(0);
      text(this.name, this.x, this.y + this.diameter/2 + 20);
    }
  }
	
}