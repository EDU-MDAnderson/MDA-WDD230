const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('Darkmode Toggle ☑️')) {
        body.style.backgroundColor = '#0D1B2A'; // Dark Blue
        main.style.color = '#FFFFFF'; // White
        modeButton.textContent = 'Darkmode Toggle ❎';
        nav.style.backgroundColor = '#002E5D'; // BYU Blue
    } else {
        body.style.backgroundColor = '#FFFFFF'; // White
        main.style.color = '#0D1B2A'; // Dark Blue
        modeButton.textContent = 'Darkmode Toggle ☑️';
        nav.style.backgroundColor = '#002E5D'; // BYU Blue
    }
});