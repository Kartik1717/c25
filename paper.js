class Paper{
    constructor(x,y,r){
        var options={
            restitution:0.1,
            isStatic:false

        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage('paper.png')
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
     display(){
         var pa=this.body.position
         push()
         translate(pa.x,pa.y)
         
         imageMode(CENTER)
         image(this.image,0,0,this.r, this.r);

     }
    
}