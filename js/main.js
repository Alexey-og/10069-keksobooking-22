'use strict';

const MIN_INTERGER = 1;
const MAX_INTERGER = 100;
const MIN_FLOAT = 0.0;
const MAX_FLOAT = 360.0;
const DIGITS_AFTER_DECPOINT = 3;

let getRandomIntegerInRange = (min, max) => {

  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (max < min) {
    max = min;
  }

  // console.log(`Случайное целое число от ${min} до ${max}: ${Math.floor(min + Math.random() * (max - min + 1))}`);
  return Math.floor(min + Math.random() * (max - min + 1));
};

let getRandomFloatInRange = (min, max, digitsAfterDecpoint) => {

  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (max < min) {
    max = min;
  }

  // console.log(`Случайное дробное число от ${min} до ${max}: ${Number((min + Math.random() * (max - min)).toFixed(digitsAfterDecpoint))}`);
  return Number((min + Math.random() * (max - min + 1)).toFixed(digitsAfterDecpoint));
};

getRandomIntegerInRange(MIN_INTERGER, MAX_INTERGER);
getRandomFloatInRange(MIN_FLOAT, MAX_FLOAT, DIGITS_AFTER_DECPOINT);
