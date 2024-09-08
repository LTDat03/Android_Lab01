// Coding Challenge #1

console.log('Coding Challenge #1');

function Car(make,speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const carFirst = new Car('BMW',120);
const carSecond = new Car('Mercedes',95);

carFirst.accelerate();
carFirst.brake();
carSecond.accelerate();
carSecond.brake();

// Coding Challenge #2

console.log('Coding Challenge #2');

class CarCl{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }
    get speedUS(){
        return this.speed /= 1.6;
    }
    set speedUS(speed){
        this.speed = speed *= 1.6;
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

const carCl = new CarCl('Ford',120);

carCl.accelerate();
carCl.brake();

console.log(carCl.speedUS);

carCl.speedUS = 50;

console.log(carCl);