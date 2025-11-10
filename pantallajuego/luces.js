const botones = document.querySelectorAll('.ventana');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.classList.contains('encendida')) return;
    boton.classList.add('encendida');
    boton.disabled = true;
  });
});