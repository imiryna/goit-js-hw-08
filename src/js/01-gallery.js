import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
  <a
  class="gallery__link"
  href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}" />
  </a>
</li>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", createGalleryCards(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250ms",
});
