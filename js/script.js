document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Esto activa tanto el menú como la animación del botón
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
});