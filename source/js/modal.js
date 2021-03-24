const successModal = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorModal = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = errorModal.querySelector('.error__button')
const errorLoadingModal = document.querySelector('#error-loading').content.querySelector('.error-loading').cloneNode(true);

successModal.classList.add('hidden');
errorModal.classList.add('hidden');
errorLoadingModal.classList.add('hidden');

document.querySelector('main').append(successModal);
document.querySelector('main').append(errorModal);
document.querySelector('main').append(errorLoadingModal);

const isEscPress = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isMouseClick = (evt) => {
  return evt.type === 'click';
};


/* const showModal = (popup, button) => {
  const hideModal = (evt) => {
    evt.preventDefault();
    if (isEscPress(evt) || isMouseClick(evt)) {
      popup.classList.add('hidden');
      if (button) {
        button.removeEventListener('click', hideModal)
      }
      popup.removeEventListener('click', hideModal);
      window.removeEventListener('keydown', hideModal);
    }
  };
  popup.classList.remove('hidden');
  popup.addEventListener('click', hideModal);
  window.addEventListener('keydown', hideModal);
};

const showSuccessModal = showModal(successModal);
const showErrorModal = showModal(errorModal, errorButton);
const showErrorLoadingModal = showModal(errorLoadingModal); */


const showSuccessModal = () => {
  successModal.classList.remove('hidden');
  successModal.addEventListener('click', hideSuccessModal);
  window.addEventListener('keydown', hideSuccessModal);
};

const hideSuccessModal = (evt) => {
  evt.preventDefault();
  if (isEscPress(evt) || isMouseClick(evt)) {
    successModal.classList.add('hidden');
    successModal.removeEventListener('click', hideSuccessModal);
    window.removeEventListener('keydown', hideSuccessModal);
  }
};

const showErrorModal = () => {
  errorModal.classList.remove('hidden');
  errorButton.addEventListener('click', hideErrorModal);
  errorModal.addEventListener('click', hideErrorModal);
  window.addEventListener('keydown', hideErrorModal);
};

const hideErrorModal = (evt) => {
  evt.preventDefault();
  if (isEscPress(evt) || isMouseClick(evt)) {
    errorModal.classList.add('hidden');
    errorButton.removeEventListener('click', hideErrorModal);
    errorModal.removeEventListener('click', hideErrorModal);
    window.removeEventListener('keydown', hideErrorModal);
  }
};

const showErrorLoadingModal = () => {
  errorLoadingModal.classList.remove('hidden');
  errorLoadingModal.addEventListener('click', hideErrorLoadingModal);
  window.addEventListener('keydown', hideErrorLoadingModal);
}

const hideErrorLoadingModal = (evt) => {
  evt.preventDefault();
  if (isEscPress(evt) || isMouseClick(evt)) {
    errorLoadingModal.classList.add('hidden');
    errorLoadingModal.removeEventListener('click', hideErrorLoadingModal);
    window.removeEventListener('keydown', hideErrorLoadingModal);
  }
};


export {
  showSuccessModal,
  showErrorModal,
  showErrorLoadingModal
}
