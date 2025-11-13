// === Configuración de imágenes ===
const fondos = [
    "pantallaCarga1.png",
    "pantallaCarga2.png",
    "pantallaCarga3.png",
    "pantallaCarga4.png",
    "pantallaCarga5.png",
    "pantallaCarga6.png",
    "pantallaCarga7.png",
    "pantallaCarga8.png",
    "pantallaCarga9.png"

];

// Selección aleatoria del fondo
const fondoAleatorio = fondos[Math.floor(Math.random() * fondos.length)];
const background = document.getElementById("background");
background.style.backgroundImage = `url('imgPantallaCarga/${fondoAleatorio}')`;

// === Barra de progreso ===
let progreso = 0;
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const intervalo = setInterval(() => {
    progreso += Math.floor(Math.random() * 5) + 1; // Subida entre 1% y 5%
    if (progreso > 100) progreso = 100;

    progressFill.style.width = `${progreso}%`;
    progressText.textContent = `${progreso}%`;

    if (progreso === 100) {
        clearInterval(intervalo);

        // Efecto de fade-out antes de cambiar de pantalla
        background.classList.add("fade-out");
        progressFill.classList.add("fade-out");

        setTimeout(() => {
            // Redirigir al menú principal del juego
            window.location.href = "../pantallajuego/pantallajuego.html";
        }, 1000);
    }
}, 100); // actualiza cada 0.2s
