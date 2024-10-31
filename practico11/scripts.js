document.getElementById('beepButton').addEventListener('click', function() {
    document.body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
    document.body.classList.toggle('color'); // Cambia el color de fondo
});
