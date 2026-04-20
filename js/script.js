document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA MENÚ ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // --- LÓGICA CARRUSEL ---
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Eventos de botones
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });
    }

    // Temporizador Automático
    function startTimer() {
        autoPlayInterval = setInterval(nextSlide, 5000); // 5 segundos
    }

    function resetTimer() {
        clearInterval(autoPlayInterval);
        startTimer();
    }

    // Inicializar
    if (slides.length > 0) {
        startTimer();
    }
});