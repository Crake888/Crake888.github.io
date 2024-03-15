document.addEventListener("DOMContentLoaded", function() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slidesToShow = 3; // Кількість слайдів для відображення
  let currentIndex = 0;
  
  // Функція для перемикання до попередньої групи слайдів
  function showPrevGroup() {
    currentIndex = (currentIndex - slidesToShow >= 0) ? currentIndex - slidesToShow : slides.length - slidesToShow;
    updateSlider();
  }
  
  // Функція для перемикання до наступної групи слайдів
  function showNextGroup() {
    currentIndex = (currentIndex + slidesToShow < slides.length) ? currentIndex + slidesToShow : 0;
    updateSlider();
  }
  
  // Функція для оновлення відображення слайдера
  function updateSlider() {
    for (let i = 0; i < slides.length; i++) {
      if (i >= currentIndex && i < currentIndex + slidesToShow) {
        slides[i].style.display = 'block';
      } else {
        slides[i].style.display = 'none';
      }
    }
  }
  
  // Обробники подій для кнопок "prev" та "next"
  prevBtn.addEventListener('click', showPrevGroup);
  nextBtn.addEventListener('click', showNextGroup);
  
  // Виклик функції оновлення слайдера після завантаження сторінки
  updateSlider();
});


//---Navbar----------------------------------------------------------------------------------------

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var headerHeight = document.querySelector('.header').offsetHeight;

  if (window.pageYOffset > headerHeight) {
      navbar.style.position = 'fixed';
      navbar.style.top = '0';
      navbar.style.width = '100%';
      navbar.style.backgroundColor = '#162e44'; 
  } else {
      navbar.style.position = 'static';
      navbar.style.backgroundColor = '#162e44'; 
  }
});

//---Hamburger-------------------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})

//---Slider----------------------------------------------------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//-------------------------------------------------------------------------------------------

