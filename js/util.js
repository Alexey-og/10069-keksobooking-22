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

export {
  getRandomNumberInRange,
  shuffleArray,
  getRandomArrayElement,
  getRandomObjectValue,
  getRandomQuantityArrayElements
};
