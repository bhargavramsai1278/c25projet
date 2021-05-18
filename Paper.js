class Paper {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
      };
    
    this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("paper.png")
      
      World.add(world, this.body);
    };
    display(){


    

      var paperpos = this.body.position;
      translate(paperpos.x,paperpos.y);
      push();
     imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
  
     pop()
     
      





    };
  };

  
  