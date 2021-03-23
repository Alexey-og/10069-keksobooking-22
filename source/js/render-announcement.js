import {
  declensionOfNumerals
} from './util.js';


const ROOMS_DECLENSION = [
  'комната',
  'комнаты',
  'комнат',
];

const GUESTS_DECLENSION = [
  'гостя',
  'гостей',
  'гостей',
];

const PhotoPreviewSize = {
  WIDTH: 45,
  HEIGHT: 40,
};

const AvatarSize = {
  WIDTH: 70,
  HEIGHT: 70,
};

const accommodationTypes = {
  bungalow: {
    title: 'Бунгало',
    minPrice: 0,
    declension: 'бунгало',
  },
  flat: {
    title: 'Квартира',
    minPrice: 1000,
    declension: 'квартиру',
  },
  house: {
    title: 'Дом',
    minPrice: 5000,
    declension: 'дом',
  },
  palace: {
    title: 'Дворец',
    minPrice: 10000,
    declension: 'дворец',
  },
};

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

/**
 * Генерация объявления с генерированными мок-данными
 * @param {array} popup — элемент сгенерированного массива с мок-данными
 * @return {object} — итоговое объявление (DOM-объект) с мок-данными
 */
const renderAnnouncement = ({author, offer}) => {
  const popupElement = popupTemplate.cloneNode(true);
  const House = {
    AVATAR: popupElement.querySelector('.popup__avatar'),
    TITLE: popupElement.querySelector('.popup__title'),
    ADDRESS: popupElement.querySelector('.popup__text--address'),
    PRICE: popupElement.querySelector('.popup__text--price'),
    TYPE: popupElement.querySelector('.popup__type'),
    CAPACITY: popupElement.querySelector('.popup__text--capacity'),
    TIME: popupElement.querySelector('.popup__text--time'),
    FEATURES: popupElement.querySelector('.popup__features'),
    DESCRIPTION: popupElement.querySelector('.popup__description'),
    PHOTOS: popupElement.querySelector('.popup__photos'),
  };

  const renderFeaturesList = (features) => {
    House.FEATURES.textContent = '';
    features.forEach((feature) => {
      let featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
      House.FEATURES.append(featureElement);
    });
  };

  const renderPhotosList = (photos) => {
    House.PHOTOS.textContent = '';
    photos.forEach((photo) => {
      let photoElement = document.createElement('img');
      photoElement.src = photo;
      photoElement.classList.add('popup__photo');
      photoElement.style.width = `${PhotoPreviewSize.WIDTH}px`;
      photoElement.style.height = `${PhotoPreviewSize.HEIGHT}px`;
      photoElement.alt = 'Фотография жилья';
      House.PHOTOS.appendChild(photoElement);
    });
  };

  offer.title.length ?
    House.TITLE.textContent = offer.title :
    House.TITLE.remove();
  offer.address.length ?
    House.ADDRESS.textContent = offer.address :
    House.ADDRESS.remove();
  offer.price.length ?
    House.PRICE.textContent = `${offer.price} ₽/ночь` :
    House.PRICE.remove();
  offer.type.length ?
    House.TYPE.textContent = accommodationTypes[offer.type].title :
    House.TYPE.remove();
  (offer.rooms.length && offer.guests.length) ?
    House.CAPACITY.textContent = `${offer.rooms} ${declensionOfNumerals(offer.rooms, ROOMS_DECLENSION)} для ${offer.guests} ${declensionOfNumerals(offer.guests, GUESTS_DECLENSION)}` :
    House.CAPACITY.remove();
  (offer.checkin.length && offer.checkout.length) ?
    House.TIME.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` :
    House.TIME.remove();
  offer.features.length ?
    renderFeaturesList(offer.features) :
    House.FEATURES.remove();
  offer.description.length ?
    House.DESCRIPTION.textContent = offer.description :
    House.DESCRIPTION.remove();
  offer.photos.length ?
    renderPhotosList(offer.photos) :
    House.PHOTOS.remove();
  if (author.avatar.length) {
    House.AVATAR.src = author.avatar;
    House.AVATAR.style.width = `${AvatarSize.WIDTH}px`;
    House.AVATAR.style.height = `${AvatarSize.HEIGHT}px`;
  } else {
    House.AVATAR.remove();
  }

  return popupElement;
};


export {
  renderAnnouncement,
  accommodationTypes
};
