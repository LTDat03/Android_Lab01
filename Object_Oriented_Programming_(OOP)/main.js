// Coding Challenge #1

console.log("Coding Challenge #1");

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const carFirst = new Car("BMW", 120);
const carSecond = new Car("Mercedes", 95);

carFirst.accelerate();
carFirst.brake();
carSecond.accelerate();
carSecond.brake();

// Coding Challenge #2

console.log("Coding Challenge #2");

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return (this.speed /= 1.6);
  }
  set speedUS(speed) {
    this.speed = speed *= 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const carCl = new CarCl("Ford", 120);

carCl.accelerate();
carCl.brake();

console.log(carCl.speedUS);

carCl.speedUS = 50;

console.log(carCl);

// Coding Challenge #3

console.log("Coding Challenge #3");

class EV {
  constructor(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} is charging at ${this.charge}%`);
  }

  accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`
    );
  }

  brake() {
    this.speed -= 10;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`
    );
  }
}

const tesla = new EV("Tesla", 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();

// Coding Challenge #4

console.log("Coding Challenge #4");
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} is charging at ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}%`
    );
    return this;
  }

  brake() {
    this.speed -= 10;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);

rivian.accelerate().brake().chargeBattery(90).accelerate();
console.log(rivian);

