const hamButton = document.querySelector('.hambtn');
const navMenu = document.querySelector('.nav_categories');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});