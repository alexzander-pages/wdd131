const menuBtn = document.querySelector('.menu-btn');
const menuSection = document.querySelector('header section');

const proveBtn = document.querySelector('#proveBtn');
const ponderBtn = document.querySelector('#ponderBtn');
const proveNav = document.querySelector('#proveNav');
const ponderNav = document.querySelector('#ponderNav');
const sunnyNav = document.querySelector('#sunnyNav')
const sunnyBtn = document.querySelector('#sunnyBtn')

menuBtn.addEventListener('click', () => {
    menuSection.classList.toggle('hide');
});

proveBtn.addEventListener('click', () => {
    proveNav.classList.toggle('hide');
});

ponderBtn.addEventListener('click', () => {
    ponderNav.classList.toggle('hide');
});

sunnyBtn.addEventListener('click', () => {
    sunnyNav.classList.toggle('hide');
});