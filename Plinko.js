class Plinko {
    constructor(x,y ){
        var ball_options ={
            isStatic:false,
            restitution: 0.1 ,
            friction: 0.5,
            density: 3,
             
        }
        this.x = x;
        this.y = y;
         
       this.body=Bodies.circle(x,y,10,ball_options);
       this.color=color(random(0,255),random(0,255),random(0,255));
       World.add(world,this.body);


    }
    display(){
        var pos= this.body.position ;
       
        push()
        translate(pos.x,pos.y);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse (0,0, this.r,this.r );
       pop()
    }


}