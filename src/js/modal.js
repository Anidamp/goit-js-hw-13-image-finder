
import galleryRef from './imagefinder'
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');

let currentImg = '';

galleryRef.addEventListener('click', onCard);
lightboxRef.addEventListener('click', onModalClose);

function onCard(e) {
    e.preventDefault();
    let current = 0;
    switch (e.target.classList.value) {
        case 'stats':
            current = e.target.previousElementSibling;
            break;
        case 'stats-item':
            current = e.target.parentNode.previousElementSibling;
            break;
        case 'material-icons':
            current = e.target.parentNode.parentNode.previousElementSibling;
            break;
        case 'image':
            current = e.target;
            break;
        case 'photo-card':
            current = e.target.firstElementChild;
            break;
        default:
            return;
    }
    openModal(current)
}
 
function openModal(current) {
    window.addEventListener('keydown', onKeyPress)
    lightboxRef.classList.add('is-open')
    valueModal(current);
}

function onModalClose(e) {
    if (e.target.dataset.action !== ('close-lightbox')
        && !e.target.classList.contains('lightbox__overlay')) { return }
    closeModal();
}

function closeModal() {
    window.removeEventListener('keydown', onKeyPress)
    lightboxImageRef.attributes['src'].value = '';
    lightboxImageRef.attributes['alt'].value = '';
    lightboxRef.classList.remove('is-open')
 }

function onKeyPress(e) {
    let neighborRef;
    switch (e.keyCode) {
        case 27:
            closeModal()
            break;
        
        case 39:
            neighborRef = currentImg.parentNode.parentNode.nextElementSibling;
            if(neighborRef === null){neighborRef = galleryEl.firstElementChild;}
            neighborRef = neighborRef.firstElementChild.firstElementChild;
            valueModal(neighborRef);
            break;
        
        case 37:
            neighborRef = currentImg.parentNode.parentNode.previousElementSibling;
            if(neighborRef === null){neighborRef = galleryEl.lastElementChild;}
            neighborRef = neighborRef.firstElementChild.firstElementChild;
            valueModal(neighborRef);
            break;
        
        default:
            break;
    }
    
}

function valueModal(current) {
    currentImg = current;
    lightboxImageRef.attributes['src'].value = current.dataset.source;
    lightboxImageRef.attributes['alt'].value = current.attributes['alt'].value;
}