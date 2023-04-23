// Свайпер
var sliderContainer = document.querySelector('.slider-container');
var sliderWrapper = document.querySelector('.slider-wrapper');
var sliderSlides = document.querySelectorAll('.slider-slide');
var prevButton = document.querySelector('.slider-button-prev');
var nextButton = document.querySelector('.slider-button-next');
var currentIndex = 0;
var startX = 0;
var isDragging = false;

prevButton.addEventListener('click', function() {
  currentIndex = (currentIndex === 0) ? sliderSlides.length - 1 : currentIndex - 1;
  updateSlider();
});

nextButton.addEventListener('click', function() {
  currentIndex = (currentIndex === sliderSlides.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

sliderContainer.addEventListener('mousedown', function(e) {
  startX = e.clientX;
  isDragging = true;

  sliderContainer.addEventListener('mousemove', onMouseMove);
});

sliderContainer.addEventListener('mouseup', function() {
  if (isDragging) {
    sliderContainer.removeEventListener('mousemove', onMouseMove);
    isDragging = false;
  }
});

sliderContainer.addEventListener('mouseleave', function() {
  if (isDragging) {
    sliderContainer.removeEventListener('mousemove', onMouseMove);
    isDragging = false;
  }
});

function onMouseMove(e) {
  if (isDragging) {
    var diffX = e.clientX - startX;

    if (Math.abs(diffX) > 50) {
      isDragging = false;

      if (diffX > 0) {
        currentIndex = (currentIndex === 0) ? sliderSlides.length - 1 : currentIndex - 1;
      } else {
        currentIndex = (currentIndex === sliderSlides.length - 1) ? 0 : currentIndex + 1;
      }

      updateSlider();
    }
  }
}

function updateSlider() {
  var translateX = -currentIndex * sliderContainer.offsetWidth;
  sliderWrapper.style.transform = 'translateX(' + translateX + 'px)';
}




// Вопросы ответ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const toggle = item.querySelector('.faq-toggle');
  const answer = item.querySelector('.faq-answer');

  toggle.addEventListener('click', () => {
    const isActive = toggle.classList.contains('active');
    
    // Закрываем все ответы
    faqItems.forEach(i => {
      const t = i.querySelector('.faq-toggle');
      const a = i.querySelector('.faq-answer');
      if (t !== toggle && t.classList.contains('active')) {
        t.classList.remove('active');
        a.classList.remove('active');
      }
    });

    // Открываем/закрываем текущий ответ
    toggle.classList.toggle('active');
    answer.classList.toggle('active');
  });
});




// Маска для номера телефона
var element = document.getElementById('phone');
var maskOptions = {
    mask: '+998(00)000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);
