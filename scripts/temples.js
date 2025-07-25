document.getElementById('currentyear').textContent = new Date().getFullYear();

const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');
const temple = document.querySelector('.temple')

hamburgerMenu.addEventListener('click', function () {
    menu.classList.toggle('show');
    temple.classList.toggle('hide')

});