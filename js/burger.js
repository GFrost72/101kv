document.addEventListener('DOMContentLoaded', (event) => {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.navigation');

  burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burgerMenu.classList.toggle('burger-toggle');
  });
});
