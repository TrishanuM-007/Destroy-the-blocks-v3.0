class Ball{
    constructor(x,y,radius) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        
       // this.body.setAngle(this.body,angle)
       World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("purple");
        stroke("yellow");
        strokeWeight(2.5);
        ellipse( 0, 0, this.radius,this.radius);
        pop();
      }
}