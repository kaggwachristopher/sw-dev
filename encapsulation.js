// let car={color:"blue",speed:200};
// console.log(car.speed);

class Car{
    // This gets called whenever a new instance of this class is created
    constructor(name){
        this.name = name;
        this.speed =200;
    }
    ignite() {
      console.log("igniting........");  
    }

    startEngine(){
        console.log("starting engine.....");
    }
}

let car1= new Car("Mercedes");
car1.ignite();
console.log(car1.name)
console.log(`Speed: ${car1.speed}`)

let car2= new Car();
car2.ignite()
car2.startEngine()

