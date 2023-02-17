let userBirthMessage;
let userCityMessage;
let userSportMessage;

const countryCapital = {
    kyiv: "Ukraine",
    london: "Great Britain",
    washington: "USA",
};

const champion = {
    basketball: "Michael Jordan",
    football: "Lionel Messi",
    tennis: "Roger Federer"
};

const userYearOfBirth = prompt("Enter your year of birth: ");
const userCity = prompt("Enter city you are living: ");
const userSport = prompt("Enter sport you're fond of: ");

if (userYearOfBirth === null || 
    userYearOfBirth >= new Date().getFullYear() || 
    isNaN(userYearOfBirth) ||
    userYearOfBirth.trim() === ""){
        userBirthMessage = `:( You did not share year of birth`;
} else {
    let userAge = new Date().getFullYear() - userYearOfBirth;
    userBirthMessage = `You're ${userAge} years old`;
}

if (userCity === null || userCity.trim() === ""){
    userCityMessage = ":( You did not share your city";
} else {
    let country = countryCapital[userCity.trim().toLowerCase()];
        userCityMessage = country ? `You're living in ${userCity.trim()}, the capital of ${country}` :
                                    `You're living in the city called ${userCity.trim()}`;
    }

if (userSport === null || userSport.trim() === ""){
    userSportMessage = ":( You did not share your favourite sport";
} else {
    let championName = champion[userSport.trim().toLowerCase()];
    userSportMessage = championName ? `Cool! Wanna be like ${championName}?` :
                                      `Your favourite sport is ${userSport.trim()}`;
    }

let userFinalMessage = `${userBirthMessage}\n${userCityMessage}\n${userSportMessage}`;

alert(userFinalMessage);
