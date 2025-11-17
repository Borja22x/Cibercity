document.addEventListener('DOMContentLoaded', function () {
  // Crear menú dinámicamente
  const menuHTML = `
    <!-- HTML dinámico -->
<div class="menu-esc">
  <h1 id="titulo-esc">Cibercity</h1>
  <div class="menu-content">

    <div id="botones">
      <a class="boton-esc" href="../index.html">Exit to main menu</a>
      <a class="boton-esc" href="../pantallajuego/pantallajuego.html" onclick="alert('Juego reiniciado')">Reset game</a>
      <a class="boton-esc" href="#">Settings</a>
      <a class="boton-esc" href="../gameInfo/gameInfo.html">Info</a>
      <a class="boton-esc" href="#" onclick="window.close()">Quit game</a>
    </div>
    </div>
</div>
  `;

  document.body.insertAdjacentHTML('beforeend', menuHTML);

  const menu = document.querySelector('.menu');

  // Toggle con Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    }
  });

  // Cerrar al hacer clic fuera
  menu.addEventListener('click', function (event) {
    if (event.target === menu) {
      menu.style.display = 'none';
    }
  });
});
