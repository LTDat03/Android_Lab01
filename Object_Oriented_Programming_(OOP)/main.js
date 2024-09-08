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

