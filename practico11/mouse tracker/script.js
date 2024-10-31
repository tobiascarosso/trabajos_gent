const body = document.body;
const image = document.getElementById('movableImage');
let isMouseDown = false;

body.addEventListener('mousedown', function() {
    isMouseDown = true;
});

body.addEventListener('mouseup', function() {
    isMouseDown = false;
});

body.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
        image.style.top = event.clientY + 'px';
        image.style.left = event.clientX + 'px';
    }
});
