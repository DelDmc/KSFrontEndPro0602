const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');

const sum = firstNumber + secondNumber;
const deduction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

let resultString = `User's input is num1: ${firstNumber} num2: ${secondNumber}\n
    ${firstNumber}+${secondNumber}=${sum}\n
    ${firstNumber}-${secondNumber}=${deduction}\n
    ${firstNumber}*${secondNumber}=${multiplication}\n
    ${firstNumber}/${secondNumber}=${division}`;

alert(resultString);
