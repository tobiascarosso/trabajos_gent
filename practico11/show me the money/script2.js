const buttons = [
    { button: document.getElementById('button1'), image: document.getElementById('image1') },
    { button: document.getElementById('button2'), image: document.getElementById('image2') },
    { button: document.getElementById('button3'), image: document.getElementById('image3') },
];

buttons.forEach(item => {
    item.button.addEventListener('click', function() {
        item.image.classList.toggle('oculto');
    });

    item.image.addEventListener('click', function() {
        this.classList.add('oculto');
    });
});