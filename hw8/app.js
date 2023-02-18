console.log("1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)\n");
for (let i = 20; i <= 30; i += 0.5){
    console.log(i);
}

console.log("\n2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.\n");

let rate = 27;
for (let i = 10; i <= 100; i += 10 ) {
    console.log(`${i} USD = ${i * 27} UAH`);
}

console.log("\n3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.\n");

const n = 1025;
let i = 1;
while (Math.pow(i, 2) < n){
    console.log(`${i} ^2 = ${Math.pow(i, 2)}. Less than ${n}`);
    i++;
}

console.log("\n4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).\n");

let numToCheck = 1027;
let devisorsCount = 0;

console.log(`The given number is ${numToCheck}`);
if (numToCheck < 1){
    console.log(`Zero and negative integers are not considered as prime or composite numbers`);
} else {
    for (let i = 1; i <= numToCheck; i++){
        if (numToCheck % i === 0){
            ++devisorsCount;
            if (devisorsCount > 2){
                break;
            } 
        }
    }
}

switch(devisorsCount) {
    case 1: {
        console.log(`By the definition commonly used in number theory, ${numToCheck} is not considered a prime number`);
        break;
    }
    case 2: {
        console.log(`Number ${numToCheck} is a prime number`);
        break;
    }
    case 3: {
        console.log(`Number ${numToCheck} is a composite number`);
        break;
    }
}

console.log("\n5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)\n");

let givenNumber = 27;
let powerOfThree = 0;
while (Math.pow(3, powerOfThree) < givenNumber) {
    powerOfThree++;
}

if (Math.pow(3, powerOfThree) === givenNumber){
    console.log(`You can get exactly ${givenNumber} by powering 3 by ${powerOfThree}`);
} else {
    console.log(`You cannot get exactly ${givenNumber} by powering 3`);
}
