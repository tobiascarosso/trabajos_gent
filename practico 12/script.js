const words = [
    "californication",
    "plataforma5",
    "black",
    "summer",
    "flea",
    "aeroplane",
    "peppers",
    "unlimited",
    "arcadium",
    "love",
    "getaway",
    "stadium",
    "quixoticelixer",
    "quarter",
    "snow",
    "dylan",
    "zephyr",
    "funky",
    "chili"
    ];  


function randomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
    
console.log(randomWords());
    
let palabraAleatoria = randomWords();
let time = 10;
let score = 0;
    
function addToDOM() {
    const randomWordElement = document.getElementById('randomWord');
    randomWordElement.textContent = palabraAleatoria;
    }
    
addToDOM();