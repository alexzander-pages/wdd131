const selectColor = document.querySelector('#mode-select');
let logo = document.querySelector('img');

selectColor.addEventListener('change', changeTheme);

function changeTheme() {
    const mode = selectColor.value;

    if (mode === 'dark') {
        document.body.style.color = 'white';
        document.body.style.backgroundColor = 'black';
        logo.setAttribute('src', 'images/byui-logo-white.png')
    } 
    else if (mode === 'light') {
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        logo.setAttribute('src', 'images/byui-logo-blue.webp')
    }
}
