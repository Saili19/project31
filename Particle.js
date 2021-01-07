class Particle {
    constructor(x,y ){
        var ball_options ={
            isStatic:false,
            restitution: 0.1 ,
            friction: 0.5,
            density: 3,
             
        }
        this.x = x;
        this.y = y;
        this.r = r;

       this.body=Bodies.circle(x,y,this.r,ball_options);
       World.add(world,this.body);


    }
    display(){
        var pos= this.body.position ;
       
        push()
        translate(pos.x,pos.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse (0,0, 10 );
       pop()
    }


}