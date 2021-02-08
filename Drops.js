class Drops{
    constructor(x, y,radius){
        var options = {
            restitution:0.3,
            friction:0.1,
            density:1.2
    }
    this.body = Bodies.circle(x, y, radius,options);
    this.x=x;
    this.y=y;
    this.radius=radius;
    World.add(world,this.body);
  }
  display(){
    var pos=this.body.position;
    translate(pos.x,pos.y);
    stroke("white");
    ellipse(0,0,this.radius,this.radius);

    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
        Drops.push(new createDrop(random(0,400), random(0,400))) }
  }
  if (this.rain.position.y > height){
      Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
  }
};