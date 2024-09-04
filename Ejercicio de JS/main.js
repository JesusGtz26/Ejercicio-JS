// Obtener el botón y el campo de entrada
const botonGuardar = document.getElementById('guardarNombre');
const campoNombre = document.getElementById('nombre');

// Función para guardar el nombre en Local Storage
botonGuardar.addEventListener('click', function() {
    const nombre = campoNombre.value; // Obtener el valor del input
    if (nombre) {
        localStorage.setItem('nombreUsuario', nombre); // Guardar en Local Storage
        alert('Nombre guardado: ' + nombre);
    } else {
        alert('Por favor, ingresa un nombre.');
    }
});

function obtenerNombre() {
    return localStorage.getItem('nombreUsuario');
}