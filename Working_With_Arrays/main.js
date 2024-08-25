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