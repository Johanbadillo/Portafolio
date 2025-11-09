const botonTema = document.getElementById('boton-tema');
const cuerpo = document.body;
const icono = botonTema.querySelector('i');

// Cargar tema guardado
if (localStorage.getItem('tema') === 'claro') {
    cuerpo.classList.add('modo-claro');
    icono.classList.replace('fa-moon', 'fa-sun');
}

// Cambiar tema al hacer clic
botonTema.addEventListener('click', () => {
    cuerpo.classList.toggle('modo-claro');
    if (cuerpo.classList.contains('modo-claro')) {
        icono.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('tema', 'claro');
    } else {
        icono.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('tema', 'oscuro');
    }
});