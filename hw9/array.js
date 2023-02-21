// Створити масив, довжину та елементи якого задає користувач.
let userArray = ['alpha', 'beta', 'delta', 'hanzel', 'and', 'grettel'];
console.log(userArray);

// Відсортувати масив за зростанням.
function compareNumeric(a, b) {
    if (a > b) {
        console.log(a, b);
        return 1;
    }		
    if (a === b) {
        console.log(a, b);
        return 0;
    }	
    if (a < b) {
        console.log(a, b);
        return -1;
    }	
  }

userArray.sort(
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
      }
);
console.log(userArray);

// Видалити елементи з масиву з 2 по 4 (включно!).
userArray.splice(2, 3);
console.log(userArray);

