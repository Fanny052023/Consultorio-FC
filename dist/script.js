const carouselContainer = document.querySelector('.carousel-container'); // Contenedor para el overflow
const slides = document.querySelector('.slides'); // Contenedor de todas las imágenes
const slideImages = document.querySelectorAll('.slides img'); // Todas las imágenes individuales

let currentSlideIndex = 0; // Índice de la imagen actual
const slideWidth = slideImages[0] ? slideImages[0].clientWidth : 0; // Ancho de una sola imagen (para el desplazamiento)

/**
 * Mueve el carrusel a la diapositiva especificada por el índice.
 * @param {number} index - El índice de la diapositiva a la que moverse.
 */
function goToSlide(index) {
    // Calcula la posición de desplazamiento y aplica la transformación CSS
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
    currentSlideIndex = index;
}

/**
 * Avanza a la siguiente diapositiva. Si llega al final, vuelve a la primera.
 */
function nextSlide() {
    if (currentSlideIndex < slideImages.length - 1) {
        goToSlide(currentSlideIndex + 1);
    } else {
        goToSlide(0); // Vuelve al principio si es la última diapositiva
    }
}

// Inicia el carrusel para que cambie de diapositiva cada 5 segundos
setInterval(nextSlide, 5000); // 5000 milisegundos = 5 segundos

/*
 * Funcionalidad del modal de especialidades
 * Controla la apertura y cierre del pop-up de especialidades.
 */
const modal = document.getElementById("modal"); // El elemento modal
const abrirModalBtn = document.getElementById("abrirModal"); // Botón para abrir el modal
const cerrarModalSpan = document.getElementById("cerrarModal"); // La "x" para cerrar el modal
const contenedorEspecialidades = document.getElementById("contenedorEspecialidades"); // Div donde se mostrarán las especialidades

// Evento para abrir el modal cuando se hace clic en el botón
abrirModalBtn.addEventListener('click', () => {
    modal.style.display = 'block'; // Muestra el modal
});

// Evento para cerrar el modal cuando se hace clic en la "x"
cerrarModalSpan.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
});

// Evento para cerrar el modal si se hace clic fuera de su contenido
window.addEventListener('click', (event) => {
    if (event.target == modal) { // Si el clic fue directamente en el fondo del modal
        modal.style.display = 'none'; // Oculta el modal
    }
});

/*
 * Datos de las especialidades en formato JSON (JavaScript Object Notation)
 * Este es el "JSON" que contiene la información de cada especialidad.
 * Puedes agregar, modificar o eliminar objetos aquí según tus necesidades.
 */
const especialidadesData = [
    {
        "nombre": "Medicina General",
        "profesional": "Dr. Juan Pérez",
        "horario": "Lunes, Miércoles y Viernes de 9:00 a 12:00 hs",
        "dia": ["Lunes", "Miércoles", "Viernes"]
    },
    {
        "nombre": "Nutrición Clínica",
        "profesional": "Lic. Ana García",
        "horario": "Martes y Jueves de 14:00 a 17:00 hs",
        "dia": ["Martes", "Jueves"]
    },
    {
        "nombre": "Psicología",
        "profesional": "Dra. Laura López",
        "horario": "Viernes de 10:00 a 13:00 hs y de 15:00 a 18:00 hs",
        "dia": ["Viernes"]
    },
    {
        "nombre": "Dermatología",
        "profesional": "Dr. Carlos Rodríguez",
        "horario": "Miércoles de 15:00 a 18:00 hs",
        "dia": ["Miércoles"]
    },
    {
        "nombre": "Cardiología",
        "profesional": "Dra. Sofía Fernández",
        "horario": "Lunes de 14:00 a 17:00 hs",
        "dia": ["Lunes"]
    },
    {
        "nombre": "Fisioterapia",
        "profesional": "Lic. Pablo Gómez",
        "horario": "Martes y Jueves de 9:00 a 12:00 hs",
        "dia": ["Martes", "Jueves"]
    },
    {
        "nombre": "Pediatría",
        "profesional": "Dra. Emilia Castro",
        "horario": "Jueves de 10:00 a 13:00 hs",
        "dia": ["Jueves"]
    },
    {
        "nombre": "Ginecología",
        "profesional": "Dra. Marta Ruiz",
        "horario": "Martes de 9:00 a 12:00 hs",
        "dia": ["Martes"]
    }
];

/**
 * Renderiza la información de las especialidades en el contenedor del modal.
 * @param {Array<Object>} especialidades - Un array de objetos con los datos de las especialidades.
 */
function mostrarEspecialidades(especialidades) {
    contenedorEspecialidades.innerHTML = ''; // Limpiar cualquier contenido anterior en el modal
    especialidades.forEach(especialidad => {
        const divEspecialidad = document.createElement('div'); // Crea un nuevo div para cada especialidad
        divEspecialidad.classList.add('especialidad-item'); // Agrega la clase CSS
        divEspecialidad.innerHTML = `
            <h4>${especialidad.nombre}</h4>
            <p><strong>Profesional:</strong> ${especialidad.profesional}</p>
            <p><strong>Horario:</strong> ${especialidad.horario}</p>
            <p><strong>Días:</strong> ${especialidad.dia.join(', ')}</p>
        `;
        contenedorEspecialidades.appendChild(divEspecialidad); // Agrega el div al contenedor
    });
}

// Llama a la función para mostrar las especialidades cuando el script se carga
// Esto asegura que las especialidades se muestren desde el principio en el modal
mostrarEspecialidades(especialidadesData);

// Asegúrate de que el carrusel se inicialice correctamente solo después de que las imágenes se hayan cargado.
// Esto es importante para que 'slideWidth' tenga el valor correcto.
window.addEventListener('load', () => {
    // Reinicia el carrusel para asegurarse de que el ancho de la imagen sea correcto
    // Esto es crucial para Codepen o si las imágenes cargan lentamente.
    if (slideImages.length > 0) {
        goToSlide(0); // Asegura que la primera imagen se muestre correctamente al cargar
    }
});

let miNombre = "Fanny y Corina";
console.log("Bienvenido, " + miNombre + "!");
// Esto mostrará: Bienvenido,Fanny y Corina!