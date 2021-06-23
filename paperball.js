class Paperball{

    constructor(){
        var options={
    isStatic:false,
    restitution:0.4,
    friction:0.9,
    density:1.1
    }
    this.body=Bodies.circle(100,350,70,options);
    this.radius=70;
    this.image=loadImage("images/paper.png");
    World.add(world,this.body)
    }
    display(){
        push();
        translate (this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop ();
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }