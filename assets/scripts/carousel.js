// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.game-carousel');
  if (!carousel) return;
  
  const slides = carousel.querySelectorAll('.carousel-slide');
  const indicators = carousel.querySelectorAll('.indicator');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      showSlide(newIndex);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      showSlide(newIndex);
    });
  }
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
  });
});
