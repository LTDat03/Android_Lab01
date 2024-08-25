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

