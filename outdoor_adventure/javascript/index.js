const gallery = document.querySelector('.featuredCardsGallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.replace('sml', 'full');

    modalImage.src = full;   // ✅ now it uses full-size image
    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
