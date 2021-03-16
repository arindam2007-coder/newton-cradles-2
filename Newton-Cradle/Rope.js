class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var opt = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX,y:this.offsetY},
            stiffness:0.04
        }
        this.rope = Constraint.create(opt);
        World.add(world,this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        push();
        fill("white");
        line(pointA.x,pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
        pop();
    }
}