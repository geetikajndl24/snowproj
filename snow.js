class Snow {
    constructor(x, y, width, height){
        var options = {
            isStatic: false
        }

    
    this.width = width
    this.height = height
    this.image=loadImage("snow4.webp")
    this.body = Bodies.rectangle(x, y, width, height, options)
    
    World.add(world, this.body)
   }

    display(){
        var pos = this.body.position
       
       // added push pop and translate
        push()

       translate(pos.x, pos.y)
        //rectMode(CENTER)
        fill("red")
       // rect(pos.x, pos.y, this.width, this.height)
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height);
       pop()


    }
}