// Lista de personajes con nombre, archivo y descripción
let personajes = [
    { 
        nombre: "Sabio", 
        archivo: "holograma analista de sistemas (sabio).png",
        descripcion: "Gana 3 bitcoins por turno y 2 bitcoins por cada ventana iluminada por una carta suya."
    },
    { 
        nombre: "Arquitecto de Red", 
        archivo: "holograma arquitecto de red(gran líder).png",
        descripcion: "Gana 3 bitcoins por turno y 2 bitcoins por cada ventana iluminada por una carta suya."
    },
    { 
        nombre: "Comerciante", 
        archivo: "holograma comerciante(comerciante) .png",
        descripcion: "Gana 3 bitcoins por turno y 2 bitcoins cada ventana iluminada por una carta suya."
    },
    { 
        nombre: "Constructor", 
        archivo: "holograma contructor de nodos(constructor).png",
        descripcion: "Gana 2 bitcoins por ronda y suma 2 puntos al final de la partida por cada ventana iluminada."
    },
    { 
        nombre: "Destructor", 
        archivo: "holograma destructor de sistemas (destructor).png",
        descripcion: "Gana 2 bitcoins por turno y ilumina ventanas pagando la mitad de su valor."
    },
    { 
        nombre: "Hacker", 
        archivo: "holograma hacker(sicario).png",
        descripcion: "Gana 6 bitcoins por ronda."
    },
    { 
        nombre: "Ia Avanzada", 
        archivo: "holograma ia avanzada (hechicero).png",
        descripcion: "Gana 4 bitcoins por ronda y suma 3 puntos al final de la partida."
    },
    { 
        nombre: "Saboteador Digital", 
        archivo: "holograma saboteador digital (bandido).png",
        descripcion: "Gana 5 bitcoins por ronda y suma 2 puntos al final de la partida"
    }
];

let index = 0;
let jugadoresSeleccionados = [];
const maxJugadores = 5;

// Elementos del DOM
const personajeImg = document.getElementById("personaje-img");
const personajeNombre = document.getElementById("personaje-nombre");
const personajeDescripcion = document.getElementById("personaje-descripcion");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnSelect = document.getElementById("btn-select");

// Sonidos
const sonidoCambiar = document.getElementById("sonido-cambiar");
const sonidoSeleccionar = document.getElementById("sonido-seleccionar");

// Función que actualiza nombre + imagen + descripción
function actualizarImagen() {
    if (personajes.length === 0) {
        personajeImg.src = "";
        personajeNombre.textContent = "Sin personajes disponibles";
        personajeDescripcion.textContent = "";
        return;
    }

    personajeImg.src = "imgSeleccionPersonaje/" + personajes[index].archivo;
    personajeNombre.textContent = personajes[index].nombre;
    personajeDescripcion.textContent = personajes[index].descripcion;
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

        setTimeout(() => {
            window.location.href = "../pantallaCarga/pantallaCarga.html";
        }, 300);
    }

    actualizarImagen();
});

// Cargar primera imagen
actualizarImagen();
