const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', function(){
  menu.classList.toggle('menu_active');
  btnMenu.classList.toggle('hamburger_active');
})