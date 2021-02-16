class MONSTER{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
             'frictionAir':0.01,
            'density':0.5
        }
        this.image = loadImage("images/Monster-01.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
         World.add(world, this.body);
      }
      display(){
        var angle= this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image, 0, 0, this.width, this.height);
        pop();
      }
}