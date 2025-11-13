const radios = document.querySelectorAll('input[name="players"]');
const jugadoresContainer = document.getElementById('jugadores');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const numJugadores = parseInt(radio.value);
    generarJugadores(numJugadores);
  });
});

function generarJugadores(num) {
  jugadoresContainer.innerHTML = ''; // Limpiar contenido previo

  for (let i = 1; i <= num; i++) {
    const divJugador = document.createElement('div');
    divJugador.classList.add('jugador');

    divJugador.innerHTML = `
      <p>Player ${i}</p>
      <div class="idtag">
        <label>ID_TAG: <input type="text" maxlength="15"></label>
      </div>
    `;

    jugadoresContainer.appendChild(divJugador);
  }
}


