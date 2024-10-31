const autoRojo = document.getElementById('autoRojo');
const autoAzul = document.getElementById('autoAzul');

let acumuladorRojo = 0;
let acumuladorAzul = 0;

window.addEventListener('keyup', function(event) {
    if (event.key === 'q') {
        acumuladorRojo += 10;
        autoRojo.style.marginLeft = acumuladorRojo + 'px';

        if (acumuladorRojo >= 500) {
            alert('¡El auto rojo ganó la carrera!');
            resetCarrera();
        }
    }

    if (event.key === 'w') {
        acumuladorAzul += 10;
        autoAzul.style.marginLeft = acumuladorAzul + 'px';

        if (acumuladorAzul >= 500) {
            alert('¡El auto azul ganó la carrera!');
            resetCarrera();
        }
    }
});

function resetCarrera() {
    acumuladorRojo = 0;
    acumuladorAzul = 0;
    autoRojo.style.marginLeft = '0px';
    autoAzul.style.marginLeft = '0px';
}
