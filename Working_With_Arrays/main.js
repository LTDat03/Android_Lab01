// Working with Arrays

// Coding challenge #1

checkDogs = (dogsJulia, dosKate) => {
    correctedJulia = dogsJulia.slice(1, -2);
    const dogs = [...correctedJulia, ...dosKate];
    dogs.forEach((age, i) => { 
        if(age >= 3){
            console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
        }else {
            console.log(`Dog number ${i + 1} is still a puppy, and is ${age} years old`);
        }
    });
}

dataJuliaFirst = [3, 5, 2, 12, 7];
dataKateFirst = [4, 1, 15, 8, 3];

dataJuliaSecond = [9, 16, 6, 8, 3];
dataKateSecond = [10, 5, 6, 1, 4];

checkDogs(dataJuliaFirst, dataKateFirst);

checkDogs(dataJuliaSecond, dataKateSecond);


// Coding challenge #2

calcAverageHumanAge = (ages) => {
    ages.forEach((age,i) => {
        ages[i] = age <= 2 ? age * 2 : 16 + age * 4; 
    })
    const adults = ages.filter(age => age >= 18);
    return adults.reduce((acc, age) => acc + age, 0) / adults.length;
} 

data1 = [5, 2, 4, 1, 15, 8, 3];
data2  = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));


// Coding challenge #3

calcAverageHumanAgeRewrite = (ages) => {
    return ages.map(age => age <= 2 ? age * 2 : 16 + age * 4)
               .filter(age => age >= 18)
               .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
}

Data1 = [5, 2, 4, 1, 15, 8, 3];
Data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAgeRewrite(Data1));
console.log(calcAverageHumanAgeRewrite(Data2));

// Coding Challenge #4
console.log('Coding Challenge #4');

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'}`);

ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);

ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const isEatingOkay = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(isEatingOkay);

dogAmountFood = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(dogAmountFood);

dogEatingSorted = dogs.slice().sort((a,b) => a.recommendedFood - b.recommendedFood);
console.log(dogEatingSorted);

