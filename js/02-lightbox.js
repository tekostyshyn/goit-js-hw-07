import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item"><a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
    </a></li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt', captionDelay: 250
});

