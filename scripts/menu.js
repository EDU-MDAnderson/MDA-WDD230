// JavaScript for mobile menu functionality
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show-menu');
    if (mainNav.classList.contains('show-menu')) {
        menuToggle.textContent = '✕'; // Change the button text to '✕' when menu is open
    } else {
        menuToggle.textContent = '☰'; // Change it back to '☰' when menu is closed
    }
});