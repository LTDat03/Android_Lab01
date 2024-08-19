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


// Coding Challenge #2

take_decimal_number_2 = function (object){
    return Math.round(object * 10) / 10;
}
console.log("Exercise 2");

printResult = function (o1,o2){
    return markHigherBMI(o1,o2) ? console.log("Mark's BMI is higher than John's!") : console.log("John's BMI is higher than Mark's!");
}

printResultBMI = function (o1,o2){
    return markHigherBMI(o1,o2) ? console.log("Mark's BMI (" + take_decimal_number_2(bmi(o1)) + ") is higher than John's(" + take_decimal_number_2(bmi(o2)) + ") !") : console.log("John's BMI (" + take_decimal_number_2(bmi(o2)) + ") is higher than Mark's(" + take_decimal_number_2(bmi(o1))+ ")!");
}

console.log("Data 1");
printResult(Marks1,John1);
printResultBMI(Marks1,John1);

console.log("Data 2");
printResult(Marks2,John2);
printResultBMI(Marks2,John2);

