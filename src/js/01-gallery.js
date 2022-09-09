// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function galleryImg(galleryItem) {
  return galleryItem
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__link" 
  href="${original}">
    <img class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join('');
}
gallery.insertAdjacentHTML('beforeend', galleryImg(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  loop: false,
  docClose: true,
});

console.log(gallery);
