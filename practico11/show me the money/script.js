const divMagia = document.getElementById('magia');
const imagenSecreta = document.getElementById('imagenSecreta');

divMagia.addEventListener('mouseenter', function() {
    imagenSecreta.style.display = 'none';
});

divMagia.addEventListener('mouseleave', function() {
    imagenSecreta.style.display = 'block';
});
