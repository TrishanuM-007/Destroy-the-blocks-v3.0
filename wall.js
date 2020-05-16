class Wall{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("#8db600");
        stroke("#ff033e")
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}