import {
  CARDS_QUANTITY,
  createCardsList
} from './data.js';


const popupsList = document.querySelector('#map-canvas');
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const PhotosPreviewsSizes = {
  WIDTH: 45,
  HEIGHT: 40,
};

const AvatarsSizes = {
  WIDTH: 70,
  HEIGHT: 70,
};


/**
 * Генерация объявления с генерированными мок-данными
 * @param {array} popup — элемент сгенерированного массива с мок-данными
 * @return {object} — итоговое объявление (DOM-объект) с мок-данными
 */
const renderPopup = (popup) => {
  const popupElement = popupTemplate.cloneNode(true);
  const featuresList = popupElement.querySelector('.popup__features');
  const photosList = popupElement.querySelector('.popup__photos');

  const renderFeaturesList = () => {
    featuresList.textContent = '';
    for (let i = 0; i < popup.offer.features.length; i++) {
      let feature = document.createElement('li');
      feature.classList.add('popup__feature', `popup__feature--${popup.offer.features[i]}`);
      featuresList.append(feature);
    }
  };

  const renderPhotosList = () => {
    photosList.textContent = '';
    for (let i = 0; i < popup.offer.photos.length; i++) {
      const photo = document.createElement('img');
      photo.src = popup.offer.photos[i];
      photo.classList.add('popup__photo');
      photo.style.width = PhotosPreviewsSizes.WIDTH + 'px';
      photo.style.height = PhotosPreviewsSizes.HEIGHT + 'px';
      photo.alt = 'Фотография жилья';
      photosList.appendChild(photo);
    }
  };


  popupElement.querySelector('.popup__title').textContent = popup.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = popup.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${popup.offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = popup.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms} комнаты для ${popup.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${popup.offer.checkin}, выезд до ${popup.offer.checkout}`;
  popupElement.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms} комнаты для ${popup.offer.guests} гостей`;
  if (popup.offer.features.length) {
    renderFeaturesList();
  }
  popupElement.querySelector('.popup__description').textContent = popup.offer.description;
  if (popup.offer.photos.length) {
    renderPhotosList();
  }
  popupElement.querySelector('.popup__avatar').src = popup.author.avatar;
  popupElement.querySelector('.popup__avatar').style.width = AvatarsSizes.WIDTH + 'px';
  popupElement.querySelector('.popup__avatar').style.height = AvatarsSizes.HEIGHT + 'px';

  return popupElement;
};

popupsList.appendChild(renderPopup(createCardsList(CARDS_QUANTITY)[0]));
