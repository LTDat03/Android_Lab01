// Coding Challenge #1

console.log("Exercise 1");

bmi = function (object) {
  return object.mass / object.height ** 2;
};

markHigherBMI = function (o1, o2) {
  return bmi(o1) > bmi(o2);
};

console.log("Data 1");
let Marks1 = {
  mass: 78,
  height: 1.69,
};

let John1 = {
  mass: 92,
  height: 1.95,
};

console.log("BMI of Mark: " + bmi(Marks1));
console.log("BMI of John: " + bmi(John1));

if (markHigherBMI(Marks1, John1)) {
  console.log("Mark has higher BMI than John");
} else {
  console.log("John has higher BMI than Mark");
}

console.log("Data 2")

let Marks2 = {
    mass: 95,
    height: 1.88,
}

let John2 = {
    mass: 85,
    height: 1.76,
}

console.log("BMI of Mark: " + bmi(Marks2));
console.log("BMI of John: " + bmi(John2));

if (markHigherBMI(Marks2, John2)) {
  console.log("Mark has higher BMI than John");
} else {
  console.log("John has higher BMI than Mark");
}
