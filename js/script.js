// JavaScript для взаємодії з модальним вікном

  // Силка для відкриття модального вікна
  var openModalLink = document.getElementById('openModal');
  // Модальне вікно
  var modal = document.getElementById('modal');
  // Затемнення фону
  var overlay = document.getElementById('overlay');
  // Кнопка для закриття модального вікна
  var closeModalButton = document.getElementById('closeModal');

  // Додати обробник події для відкриття модального вікна
  openModalLink.addEventListener('click', function () {
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });

  // Додати обробник події для закриття модального вікна
  closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });



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