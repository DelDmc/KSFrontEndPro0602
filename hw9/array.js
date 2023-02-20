// Створити масив, довжину та елементи якого задає користувач.
let userArray = ['alpha', 'beta', 'delta', 'hanzel', 'and', 'grettel'];
console.log(userArray);

// Відсортувати масив за зростанням.
userArray.sort((a, b) => a.length - b.length);
console.log(userArray);

// Видалити елементи з масиву з 2 по 4 (включно!).
userArray.splice(1, 3);
console.log(userArray);

