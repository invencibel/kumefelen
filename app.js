function mostrarMensajeBienvenida() {
    const mensaje = "¡Bienvenido/a a Kume Felén Natura!";
    alert(mensaje);
}

// Llamar a la función cuando la página cargue
window.onload = function() {
    mostrarMensajeBienvenida();
};

// Alternar entre tema claro y oscuro
const toggleButton = document.createElement('button');
toggleButton.innerText = "Cambiar Tema";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 20px";
toggleButton.style.backgroundColor = "#4a148c";
toggleButton.style.color = "#fff";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "5px";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        toggleButton.innerText = "Cambiar a Tema Claro";
    } else {
        toggleButton.innerText = "Cambiar a Tema Oscuro";
    }
});

// Agregar una clase de tema oscuro en CSS (añadir esta parte en tu archivo CSS)
/*
.dark-theme {
    background-color: #1e1e1e;
    color: #fff;
}

.dark-theme a {
    color: #fff;
}
*/

// Función para resaltar el menú de navegación cuando se pasa el mouse
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = "#6a1b9a";
    });

    item.addEventListener('mouseout', () => {
        item.style.color = "";
    });
});

// Animación de imágenes: aumentar tamaño al hacer clic
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('click', () => {
        if (img.classList.contains('zoom')) {
            img.classList.remove('zoom');
            img.style.transform = 'scale(1)';
        } else {
            img.classList.add('zoom');
            img.style.transform = 'scale(1.5)';
        }
    });
});

// Función para desplazarse suavemente a la parte superior de la página
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = "Subir";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "60px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "10px 20px";
scrollToTopButton.style.backgroundColor = "#4a148c";
scrollToTopButton.style.color = "#fff";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.cursor = "pointer";
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hacer que el botón "Subir" aparezca solo cuando el usuario haga scroll hacia abajo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Inicialmente esconder el botón "Subir"
scrollToTopButton.style.display = 'none';

// Mostrar alerta cuando el usuario intenta salir del sitio (sin confirmar)
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});



