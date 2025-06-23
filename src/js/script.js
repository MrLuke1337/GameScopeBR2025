const hamburguer = document.querySelector('.hamburguer');
const menuHeader = document.querySelector('.menu-header');

function toggleMenu(){
    hamburguer.classList.toggle('active');
    menuHeader.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);
menuHeader.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});