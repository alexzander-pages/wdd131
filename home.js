const menuBtn = document.querySelector('.menu-btn');
const menuSection = document.querySelector('header section');

const proveBtn = document.querySelector('#proveBtn');
const ponderBtn = document.querySelector('#ponderBtn');
const proveNav = document.querySelector('#proveNav');
const ponderNav = document.querySelector('#ponderNav');

menuBtn.addEventListener('click', () => {
    menuSection.classList.toggle('hide');
});

proveBtn.addEventListener('click', () => {
    proveNav.classList.toggle('hide');
});

ponderBtn.addEventListener('click', () => {
    ponderNav.classList.toggle('hide');
});