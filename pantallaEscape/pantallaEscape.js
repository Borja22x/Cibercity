document.addEventListener('DOMContentLoaded', function () {
  // Crear menú dinámicamente
  const menuHTML = `
    <!-- HTML dinámico -->
<div class="menu">
  <h1>Cibercity</h1>
  <div class="menu-content">

    <div id="botones">
    <a href="../index.html">Exit to main menu</a>
    <a href="../pantallajuego/pantallajuego.html" onclick="alert('Juego reiniciado')">Reset game</a>
    <a href="#">Settings</a>
    <a href="../gameInfo/gameInfo.html">Info</a>
    <a href="#" onclick="window.close()">Quit game</a>
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
