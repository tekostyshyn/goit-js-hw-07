import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
        </div>`;
    })
    .join("");
}

galleryEl.addEventListener("click", onGalleryImgClick);

function onGalleryImgClick(evt) {
  blockDefaultAction(evt);

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  function onEscKeyPress(evt) {
    const ESC_KEY = "Escape";
    
    if (evt.code === ESC_KEY) {
      instance.close(() => {
        window.removeEventListener("keydown", onEscKeyPress);
      });
    }
  }

  const instance = basicLightbox.create(
    `
    <img src=${evt.target.dataset.source} width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();
}

function blockDefaultAction(evt) {
  evt.preventDefault();
}
