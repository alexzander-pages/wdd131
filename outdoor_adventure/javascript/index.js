const gallery = document.querySelector('.featuredCardsGallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


gallery.addEventListener('click', openModal);

let lastFocusedElement;

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    lastFocusedElement = document.activeElement;

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.replace('sml', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
    closeButton.focus();
}

closeButton.addEventListener('click', () => {
    modal.close();
    lastFocusedElement.focus();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.close();
        lastFocusedElement?.focus();
    }
});

gallery.addEventListener('keydown', (e) => {
    if ((e.key == 'Enter' || e.key === ' ') && e.target.tagName === 'IMG') {
        e.preventDefault();
        openModal(e);
    }
});

const startButtons = document.querySelectorAll('.startButton');

startButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'adventures.html';
    });
});