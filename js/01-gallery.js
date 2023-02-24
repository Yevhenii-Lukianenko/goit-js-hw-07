import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector('.gallery');

// ======= Adds cards to gallery container

const imageCardsMarkup = galleryItems
  .map(
    galleryItem => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join('');

galleryContainerRef.insertAdjacentHTML('beforeend', imageCardsMarkup);

// ======= Adds event listener to gallery container for opening modal with a selected image

galleryContainerRef.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const selectedImgLink = event.target.getAttribute('data-source');

  const modalOfSelectedImg = basicLightbox.create(`
    <img src="${selectedImgLink}" width="800" height="600">
`);

  modalOfSelectedImg.show();

  // Adds event listeners to close modal

  document.addEventListener('keydown', closeModal);
  document.addEventListener('mousedown', closeModal);

  // Closes modal and removes event listeners

  function closeModal(event) {
    if (event.key === 'Escape' || event.type === 'mousedown') {
      modalOfSelectedImg.close();
      document.removeEventListener('keydown', closeModal);
      document.removeEventListener('mousedown', closeModal);
    }
  }
}
