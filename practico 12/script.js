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

let palabraAleatoria = randomWords();
let time = 10;
let score = 0;
let intervalId;

function addToDOM() {
    const randomWordElement = document.getElementById('randomWord');
    randomWordElement.textContent = palabraAleatoria;
}

function actualizarTiempo() {
    const timeSpan = document.getElementById('timeSpan');
    intervalId = setInterval(() => {
        time--;
        timeSpan.textContent = `${time}s`;

        if (time <= 0) {
            clearInterval(intervalId);
            gameOver();
        }
    }, 1000);
}

function updateScore() {
    score++;
    document.getElementById('score').textContent = score;
}

function gameOver() {
    const endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = `
        <h2>¡Se acabó el tiempo!</h2>
        <p>Puntaje final: ${score}</p>
        <button id="restartButton">Reiniciar</button>
    `;

    document.querySelector('.main').style.display = 'none';

    const restartButton = document.getElementById('restartButton');
    restartButton.addEventListener('click', () => {
        location.reload();
    });
}

addToDOM();
actualizarTiempo();

const input = document.getElementById('text');

input.addEventListener('input', function(e) {
    let palabraIngresada = e.target.value;

    if (palabraIngresada === palabraAleatoria) {
        time += 3;
        input.value = '';
        palabraAleatoria = randomWords();
        addToDOM();
        updateScore();
    }
});
