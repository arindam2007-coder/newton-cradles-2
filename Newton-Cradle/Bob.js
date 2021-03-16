class Bob {
    constructor(x,y,radius) {
        var opt = {
            isStatic:false,
            'resitution':33,
            'isStatic': false,
            'density': 0.25
            
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,opt);

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
        pop();
    }
}