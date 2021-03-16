class Roof {
    constructor(x,y,width,height){
        var opt = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        fill("gold");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}