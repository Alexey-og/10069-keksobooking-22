import {
  Coords,
  titles,
  Prices,
  accommodationTypes,
  RoomsQuantity,
  QuestsQuantity,
  checkinTimes,
  checkoutTimes,
  features,
  descriptions,
  photos
} from './data.js';


/**
 * Получение случайного числа из диапазона
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @param {number} digitsAfterDecpoint — количество знаков после запятой
 * @return {number} — случайное число
 */
const getRandomNumberInRange = (min, max, digitsAfterDecpoint = 0) => {
  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (max < min) {
    max = min;
  }
  return Number((min + Math.random() * (max - min)).toFixed(digitsAfterDecpoint));
};


/**
 * Перемешивание элементов массива в случайном порядке
 * @param {array} array — исходный массив
 * @return {array} — итоговый массив
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


/**
 * Получение случайного элемента массива
 * @param {array} array — исходный массив
 * @return {string|number|object} — значение массива со случайным индексом
 */
const getRandomArrayElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};


/**
 * Получение случайного элемента объекта
 * @param {object} object — исходный объект
 * @return {string|number|object} — значение объекта со случайным ключом
 */
const getRandomObjectValue = (object) => {
  return object[Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)]];
};


/**
 * Получение случайного количества случайных элементов массива
 * @param {array} array — исходный массив
 * @return {array} — итоговый массив
 */
const getRandomQuantityArrayElements = (array) => {
  return shuffleArray(array).slice(0, getRandomNumberInRange(1, array.length));
}


/**
 * Заполнение объявления пользователя мок-данными
 * @return {object} — итоговый объект-объявление
 */
const renderCard = (i) => {
  const COORD_X = getRandomNumberInRange(Coords.MIN_X, Coords.MAX_X, Coords.DIGITS);
  const COORD_Y = getRandomNumberInRange(Coords.MIN_Y, Coords.MAX_Y, Coords.DIGITS);

  const card = {
    author: {
      avatar: 'img/avatars/user0' + i + '.png',
    },
    offer: {
      title: getRandomArrayElement(titles),
      address: COORD_X + ', ' + COORD_Y,
      price: getRandomNumberInRange(Prices.MIN, Prices.MAX),
      type: getRandomObjectValue(accommodationTypes),
      rooms: getRandomNumberInRange(RoomsQuantity.MIN, RoomsQuantity.MAX),
      guests: getRandomNumberInRange(QuestsQuantity.MIN, QuestsQuantity.MAX),
      checkin: getRandomArrayElement(checkinTimes),
      checkout: getRandomArrayElement(checkoutTimes),
      features: getRandomQuantityArrayElements(features),
      description: getRandomArrayElement(descriptions),
      photos: getRandomQuantityArrayElements(photos),
    },
    location: {
      x: COORD_X,
      y: COORD_Y,
    },
  };

  return card;
};


/**
 * Создание массива из карточек-объявлений пользователя
 * @param {number} quantity — количество карточек-объявлений
 * @return {array} — итоговый массив из карточек
 */
const createCardsList = (quantity) => {
  let cardsList = [];
  for (let i = 0; i < quantity; i++) {
    cardsList.push(renderCard(i));
  }
  return cardsList;
}


export {
  getRandomNumberInRange,
  shuffleArray,
  getRandomArrayElement,
  getRandomObjectValue,
  getRandomQuantityArrayElements,
  createCardsList
};
