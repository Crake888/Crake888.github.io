document.addEventListener("DOMContentLoaded", function() {
    // Список існуючих сторінок
    const validPages = [
        'index.html',
        'about.html',
        'contact-us.html',
        'policy.html'
        // Додайте інші сторінки вашого проекту
    ];
  
    // Отримати шлях поточної сторінки
    const path = window.location.pathname.split('/').pop();
  
    // Перевірити чи існує сторінка
    if (!validPages.includes(path) && path !== '') {
        // Перенаправити на сторінку 404
        window.location.href = '404.html';
    }
  });