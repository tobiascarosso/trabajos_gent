const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.body.style.backgroundColor = colorInput.value;
    } else if (event.key === 'Backspace') {
        document.body.style.backgroundColor = 'white';
    }
});
