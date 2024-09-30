let currentSlide = 0;
let autoSlideInterval;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel img');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    resetAutoSlide();
}

function autoSlide() {
    moveSlide(1);  // Move para o próximo slide
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000);  // Muda de slide a cada 3 segundos
}

// Inicializa o carrossel automático ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    autoSlideInterval = setInterval(autoSlide, 3000);
});

