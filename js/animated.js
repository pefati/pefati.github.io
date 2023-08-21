let clickCount = 0;
const changeButton = document.getElementById('change-button');
const redirectButton = document.getElementById('redirect-button');

changeButton.addEventListener('click', function() {
    clickCount++;

    if (clickCount === 1) {
        changeButton.innerHTML = "Esperar a que termine de comer";
        document.getElementById('me').src = "new-image.jpg";
        document.getElementById('title').innerHTML = "Nueva imagen y texto";
        document.getElementById('state-message').innerHTML = "Presiona nuevamente para el último cambio";
    } else if (clickCount === 2) {
        changeButton.innerHTML = "Ver el regalo!";
        document.getElementById('me').src = "third-image.jpg";
        document.getElementById('title').innerHTML = "Último cambio";
        document.getElementById('state-message').innerHTML = "¡Ultimo cambio, preparando el abrazo!";
        redirectButton.classList.remove('hidden');
    } else if (clickCount === 3) {
        window.location.href = "/nao2.html";
    }
});
