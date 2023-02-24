import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector('.gallery');

// ======= Adds cards to gallery container

const imageCardsMarkup = galleryItems
  .map(
    galleryItem => `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`
  )
  .join('');

galleryContainerRef.insertAdjacentHTML('beforeend', imageCardsMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
