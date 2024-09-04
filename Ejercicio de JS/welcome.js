      // Función para obtener el nombre desde Local Storage
      function obtenerNombre() {
        return localStorage.getItem('nombreUsuario');
    }

    // Función para mostrar el mensaje de bienvenida
    function mostrarBienvenida(nombre) {
        const mensajeBienvenida = document.getElementById('mensajeBienvenida');
        mensajeBienvenida.textContent = '¡Bienvenido, ' + nombre + '!';
        document.getElementById('formularioNombre').style.display = 'none'; // Ocultar el formulario
    }

    // Comprobar si ya hay un nombre guardado en Local Storage
    const nombreGuardado = obtenerNombre();
    if (nombreGuardado) {
        mostrarBienvenida(nombreGuardado); // Si hay nombre, mostrar bienvenida
    }

    // Función para guardar el nombre en Local Storage
    document.getElementById('guardarNombre').addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        if (nombre) {
            localStorage.setItem('nombreUsuario', nombre); // Guardar nombre en Local Storage
            mostrarBienvenida(nombre); // Mostrar mensaje de bienvenida
        } else {
            alert('Por favor, introduce tu nombre.'); // Si no se ha ingresado nombre, mostrar alerta
        }
    });

    // Función para borrar el nombre del Local Storage
    document.getElementById('borrarNombre').addEventListener('click', function() {
        localStorage.removeItem('nombreUsuario'); // Eliminar solo el nombre guardado
        alert('Nombre eliminado del Local Storage.');
        location.reload(); // Recargar la página para reiniciar el formulario
    });