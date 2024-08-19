// JAVASCRIPT FUNDAMENTALS - PART 1

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

// Coding Challenge #3

console.log("Exercise 3");

Dolphins1 = [96,108,89]
Koalas1 = [88,91,110]

Dolphins2 = [97,112,101]
Koalas2 = [109,95,123]

Dolphins3 = [97,112,101]
Koalas3 = [109,95,106]

getAvgTeam = function (team){
    let sum = 0;
    for (let i = 0; i < team.length; i++){
        sum += team[i];
    }
    return sum / team.length;
}

getWinner = function (team1,team2){
    let avgTeam1 = getAvgTeam(team1);
    let avgTeam2 = getAvgTeam(team2);

    if (avgTeam1 < 100 && avgTeam2 < 100){
        return "No team win!";
    }else if (avgTeam1 == avgTeam2){
        return "Draw";
    }else{
        return avgTeam1 > avgTeam2 ? "Dolphins win" : "Koalas win";
    }
}

console.log("Data 1 : " + getWinner(Dolphins1,Koalas1));
console.log("Data Bonus 1 : " + getWinner(Dolphins2,Koalas2));
console.log("Data Bonus 2 : " + getWinner(Dolphins3,Koalas3));

// Coding Challenge #4

console.log("Exercise 4");

bill = [275, 40, 430]

getTip = (cost) => {
    return cost >= 50 && cost <= 300 ? cost * 0.15 : cost * 0.2;
}

for(let i = 0;i<bill.length;i++){
    console.log("The bill was " + bill[i] + ", the tip was " + getTip(bill[i]) + ", and the total value " + (bill[i] + getTip(bill[i])));
}

//JAVASCRIP FUNDAMENTALS - PART 2

// Coding Challenge #1

console.log("Exercise 1");

calcAverage = (score1,score2,score3) => {
    return (score1 + score2 + score3) / 3;
}

checkWinner = (avgDolphins,avgKoalas) => {
    return avgKoalas >= 2 * avgDolphins ?  `Dolphins win(${avgDolphins} vs ${avgKoalas})`: `Koalas win(${avgKoalas} vs ${avgDolphins})`;
}

console.log("Data 1 : " + checkWinner(calcAverage(44,23,71),calcAverage(65,54,49)));
console.log("Data 2 : " + checkWinner(calcAverage(85,54,41),calcAverage(23,34,27)));

// Coding Challenge #2

console.log("Exercise 2");
calcTip =  (cost) => {
  return cost >= 50 && cost <= 300 ? cost * 0.15 : cost * 0.2;
}

bills = [125,555,44];

tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

for(let i = 0;i<bills.length;i++){
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${total[i]}`);
}


