import './form.js';
import './map.js';


const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successPopup = successTemplate.cloneNode(true);
document.querySelector('main').append(successPopup);
successPopup.classList.add('hidden');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorPopup = errorTemplate.cloneNode(true);
document.querySelector('main').append(errorPopup);
errorPopup.classList.add('hidden');

/* const hidePopup = (popup) => {
  popup.classList.add('hidden');

  popup.removeEventListener('click', () => {
    hidePopup(popup);
  });

  window.removeEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      hidePopup(popup);
    }
  });
};

const showPopup = (popup) => {
  popup.classList.remove('hidden');

  popup.addEventListener('click', () => {
    hidePopup(popup);
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      hidePopup(popup);
    }
  });
}; */
