// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

let gallery = document.querySelector('.gallery');
gallery.style.listStyleType = "none";

for (let index = 0; index < galleryItems.length; index++) {
	let galleryItem = document.createElement('li');
	galleryItem.classList.add('gallery__item');
	gallery.appendChild(galleryItem);

	let galleryLink = document.createElement('a');
	galleryLink.href = galleryItems[index].original;
	galleryLink.classList.add('gallery__link');
	galleryItem.appendChild(galleryLink);

	let galleryImage = document.createElement('img');
	galleryImage.classList.add('gallery__image');
	galleryImage.src = galleryItems[index].preview;
	galleryImage.dataset.source = galleryItems[index].original;
	galleryImage.alt = galleryItems[index].description;
	galleryLink.appendChild(galleryImage);
}

let lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250
});
