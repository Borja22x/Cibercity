// Lista de personajes como OBJETOS (correcto)
let personajes = [
    { nombre: "Sabio", archivo: "holograma analista de sistemas (sabio).png" },
    { nombre: "Gran Líder", archivo: "holograma arquitecto de red(gran líder).png" },
    { nombre: "Comerciante", archivo: "holograma comerciante(comerciante) .png" },
    { nombre: "Constructor", archivo: "holograma contructor de nodos(constructor).png" },
    { nombre: "Destructor", archivo: "holograma destructor de sistemas (destructor).png" },
    { nombre: "Sicario", archivo: "holograma hacker(sicario).png" },
    { nombre: "Hechicero", archivo: "holograma ia avanzada (hechicero).png" },
    { nombre: "Bandido", archivo: "holograma saboteador digital (bandido).png" }
];

let index = 0;
let jugadoresSeleccionados = [];
const maxJugadores = 5;

// Elementos del DOM
const personajeImg = document.getElementById("personaje-img");
const personajeNombre = document.getElementById("personaje-nombre");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnSelect = document.getElementById("btn-select");

// Sonidos
const sonidoCambiar = document.getElementById("sonido-cambiar");
const sonidoSeleccionar = document.getElementById("sonido-seleccionar");

// Función que actualiza nombre + imagen
function actualizarImagen() {
    if (personajes.length === 0) {
        personajeImg.src = "";
        personajeNombre.textContent = "Sin personajes disponibles";
        return;
    }

    personajeImg.src = "imgSeleccionPersonaje/" + personajes[index].archivo;
    personajeNombre.textContent = personajes[index].nombre;
}

// Flecha izquierda
btnLeft.addEventListener("click", () => {
    index = (index - 1 + personajes.length) % personajes.length;
    actualizarImagen();

    sonidoCambiar.currentTime = 0;
    sonidoCambiar.play();
});

// Flecha derecha
btnRight.addEventListener("click", () => {
    index = (index + 1) % personajes.length;
    actualizarImagen();

    sonidoCambiar.currentTime = 0;
    sonidoCambiar.play();
});

// Seleccionar personaje
btnSelect.addEventListener("click", () => {
    const personajeElegido = personajes[index];

    jugadoresSeleccionados.push(personajeElegido);

    sonidoSeleccionar.currentTime = 0;
    sonidoSeleccionar.play();

    alert("Jugador " + jugadoresSeleccionados.length +
          " ha elegido: " + personajeElegido.nombre);

    // Quitar personaje
    personajes.splice(index, 1);

    if (index >= personajes.length) index = 0;

    if (jugadoresSeleccionados.length === maxJugadores) {
    console.log("Selecciones finales:", jugadoresSeleccionados);

    // Espera un momento para que el sonido se escuche
    setTimeout(() => {
        window.location.href = "../pantallajuego/pantallajuego.html";
    }, 300);
}

    actualizarImagen();
});

// Cargar primera imagen
actualizarImagen();
