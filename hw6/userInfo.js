const userYearOfBirth = prompt("Enter your year of birth: ");
const userCity = prompt("Enter city you are living: ");
const userSport = prompt("Enter sport you're fond of: ");
let userAge = new Date().getFullYear() - userYearOfBirth;

let champion = {
    basketball: "Michael Jordan",
    football: "Lionel Messi",
    tennis: "Roger Federer"
};

let userBirthMessage = userYearOfBirth !== null ? 
                       `You're ${userAge} years old\n` : 
                       `( You did not share year of birth\n`;

let userCityMessage = userCity !== null ? 
                      userCity.toLowerCase() === "kyiv" || 
                      userCity.toLowerCase() === "london" || 
                      userCity.toLowerCase() === "washington" ?
                      `You're living in the capital called ${userCity}\n` :
                      `You're living in the city called ${userCity}\n`:
                      `:( You did not share your city\n`;

let userSportMessage = userSport !== null ?
                       champion[userSport.toLowerCase()]?
                       `Cool! Wanna be like ${champion[userSport.toLowerCase()]}?` :
                       `Your favourite sport is ${userSport}`:
                       `:( You did not share your favourite sport`;

let userFinalMessage = userBirthMessage.concat(userCityMessage, userSportMessage);

alert(userFinalMessage);


