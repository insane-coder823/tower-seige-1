class Polygon{
constructor(x,y,width,height)
{
var options={

    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
    

}

this.body = Bodies.rectangle(x, y,width,height, options);
this.image = loadImage("polygon.png");
 World.add(world, this.body);
 this.width = width;
 this.height = height;
}

    


    display(){
        var polygonpos=this.body.position;		
        push()
        translate(polygonpos.x, polygonpos.y);
        fill(255,0,255)
        imageMode(CENTER);
        
        image(this.image, 0,0,50,50);
        pop()





    }







}