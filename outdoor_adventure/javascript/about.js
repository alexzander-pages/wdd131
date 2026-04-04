const startButtons = document.querySelectorAll('.startButton');

startButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'adventures.html';
    });
});