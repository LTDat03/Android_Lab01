//JAVASCRIP FUNDAMENTALS - PART 2

// Coding Challenge #1

console.log("Exercise 1");

calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

checkWinner = (avgDolphins, avgKoalas) => {
  return avgKoalas >= 2 * avgDolphins
    ? `Dolphins win(${avgDolphins} vs ${avgKoalas})`
    : `Koalas win(${avgKoalas} vs ${avgDolphins})`;
};

console.log(
  "Data 1 : " + checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49))
);
console.log(
  "Data 2 : " + checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27))
);

// Coding Challenge #2

console.log("Exercise 2");

calcTip = (cost) => {
  return cost >= 50 && cost <= 300 ? cost * 0.15 : cost * 0.2;
};

bills = [125, 555, 44];

tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

for (let i = 0; i < bills.length; i++) {
  console.log(
    `The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${total[i]}`
  );
}

// Coding Challenge #3

take_decimal_number_2 = function (object) {
  return Math.round(object * 10) / 10;
};

console.log("Exercise 3");

Mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
};

John = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
};

calcBMI = (object) => {
  return (bmi = object.mass / object.height ** 2);
};

console.log(
  calcBMI(Mark) > calcBMI(John)
    ? `Mark's BMI (${take_decimal_number_2(
        calcBMI(Mark)
      )}) is higher than John's BMI (${take_decimal_number_2(calcBMI(John))})`
    : `John's BMI (${take_decimal_number_2(
        calcBMI(John)
      )}) is higher than Mark's BMI (${take_decimal_number_2(calcBMI(Mark))})`
);
