class Rectangle{

    constructor(width,height){
        this.width=width;
        this.height=height;
    }
   area(){
       return this.width*this.height;
   }
}
rect = new Rectangle(2,3);
rect.height = 4;
console.log(rect.area())