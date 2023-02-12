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
    if (evt.code === "Escape") {
      instance.close();
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
    },
    {
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
        console.log("is removed");
      },
    }
  );

  instance.show();
}

function blockDefaultAction(evt) {
  evt.preventDefault();
}
