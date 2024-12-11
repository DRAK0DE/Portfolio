function inicializarCarrusel() {
    const grande = document.querySelector('.contenido');
    const puntos = document.querySelectorAll('.controls__point'); // Puntos del carrusel
    const izquierda = document.querySelector('.controls__left');
    const derecha = document.querySelector('.controls__right');

    const posters= document.querySelectorAll('.contenido__poster');
    
    let posicion = -1;
    const cantidadFotos = grande.children.length; // Cuenta la cantidad de hijos en el carrusel
    const anchoFoto = 100 / cantidadFotos; // Calcula el ancho de cada imagen en porcentaje

    // Función para mover el carrusel o la caja grande
    function moverCajita() {
        grande.style.transform = `translateX(${posicion * anchoFoto}%)`;

        // Actualizar la clase "activo" en los puntos
        puntos.forEach(punto => punto.classList.remove('activo'));
        puntos[-posicion].classList.add('activo');

        // Actualizar la clase "activo" en los posters
        posters.forEach(poster=> poster.classList.remove('activo'));
        posters[-posicion].classList.add('activo');
    }

    // Configuración de los puntos del carrusel
    puntos.forEach((cadaPunto, i) => {
        cadaPunto.addEventListener('click', function () {
            posicion = -i;
            moverCajita();
        });
    });

    // Función para el botón derecho
    derecha.addEventListener('click', function () {
        if (posicion > -(cantidadFotos - 1)) {
            posicion--;
            moverCajita();
        }
    });

    // Función para el botón izquierdo
    izquierda.addEventListener('click', function () {
        if (posicion < 0) {
            posicion++;
            moverCajita();
        }
    });

    moverCajita();
}

// Inicializa el carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarCarrusel);