class Stone {
    constructor(x, y) {  
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
    }
    this.r = 40
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
   };
   display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    ellipseMode(CENTER);
    stroke(255);
    fill(127);
    ellipse(pos.x, pos.y, this.r);
    pop();
   }
} 