import {
  accommodationTypes
} from './render-announcement.js';

/* import {
  mainPinAddress
} from './map.js'; */     /*   Выяснить, почему появляется ошибка   */

import {
  sendData
} from './create-fetch.js';

import {
  showModal,
  successModal,
  errorModal
} from './modal.js';


const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelectorAll('.map__filter');
const features = document.querySelector('.map__features');
const adFormElement = adForm.querySelectorAll('.ad-form__element');

const Accommodation = {
  TITLE: adForm.querySelector('#title'),
  ADDRESS: adForm.querySelector('#address'),
  TYPE: adForm.querySelector('#type'),
  PRICE: adForm.querySelector('#price'),
  CHECKIN: adForm.querySelector('#timein'),
  CHECKOUT: adForm.querySelector('#timeout'),
  ROOM_NUMBER: adForm.querySelector('#room_number'),
  CAPACITY: adForm.querySelector('#capacity'),
};

const MAX_GENERAL_PRICE = 1000000;

/* const RoomsCapacity = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
}; */


/* Accommodation.TITLE.addEventListener('invalid', (evt) => {
  const titleValidityStates = {
    tooShort: 'Слишком короткий заголовок. Длина должна быть минимум 30 символов',
    tooLong: 'Слишком длинный заголовок',
    valueMissing: 'Заголовок должен быть обязательно заполнен',
    valid: '',
  };
  for (let state in titleValidityStates) {
    if (evt.target.validity[state]) {
      console.log('Сработал ' + state + ': ' + evt.target.validity[state] + '. Значение: ' + titleValidityStates[state]);
      evt.target.setCustomValidity(titleValidityStates[state]);
    }
  }
});

Accommodation.PRICE.addEventListener('invalid', (evt) => {
  const priceValidityStates = {
    valueMissing: 'Введите цену',
    rangeUnderflow: `Цена за ${accommodationTypes[Accommodation.TYPE.value].declension} должна быть больше ${evt.target.min} рублей`,
    rangeOverflow: `Цена за жилье должна быть меньше ${MAX_GENERAL_PRICE} рублей`,
    valid: '',
  };
  for (let state in priceValidityStates) {
    if (evt.target.validity[state]) {
      console.log('Сработал ' + state + ': ' + evt.target.validity[state] + '. Значение: ' + priceValidityStates[state]);
      evt.target.setCustomValidity(priceValidityStates[state]);
    }
  }
}); */


const setFilterInactive = () => {
  mapFilter.forEach((filterElement) => {
    filterElement.disabled = true;
  });
  features.disabled = true;
};

const setFormInactive = () => {
  adFormElement.forEach((formElement) => {
    formElement.disabled = true;
  });
  adForm.querySelector('.ad-form-header').disabled = true;
  adForm.classList.add('ad-form--disabled');
};

const setFilterActive = () => {
  mapFilter.forEach((filterElement) => {
    filterElement.disabled = false;
  });
  features.disabled = false;
};

const setFormActive = () => {
  adFormElement.forEach((formElement) => {
    formElement.disabled = false;
  });
  adForm.querySelector('.ad-form-header').disabled = false;
  adForm.classList.remove('ad-form--disabled');
};

Accommodation.TITLE.addEventListener('input', (evt) => {
  document.querySelector('.char-counter').textContent = `( ${evt.target.value.length} / 100 символов )`;
});

Accommodation.TITLE.addEventListener('invalid', (evt) => {
  if (evt.target.validity.tooShort) {
    evt.target.setCustomValidity('Слишком короткий заголовок. Длина должна быть минимум 30 символов');
  } else if (evt.target.validity.tooLong) {
    evt.target.setCustomValidity('Слишком длинный заголовок');
  } else if (evt.target.validity.valueMissing) {
    evt.target.setCustomValidity('Заголовок должен быть обязательно заполнен');
  } else {
    evt.target.setCustomValidity('');
  }
});

Accommodation.PRICE.min = accommodationTypes[Accommodation.TYPE.value].minPrice;
Accommodation.PRICE.max = MAX_GENERAL_PRICE;

Accommodation.TYPE.addEventListener('change', (evt) => {
  Accommodation.PRICE.placeholder = accommodationTypes[evt.target.value].minPrice;
  Accommodation.PRICE.min = accommodationTypes[evt.target.value].minPrice;
});

Accommodation.PRICE.addEventListener('invalid', (evt) => {
  if (evt.target.validity.valueMissing) {
    evt.target.setCustomValidity('Введите цену');
  } else if (evt.target.validity.rangeUnderflow) {
    evt.target.setCustomValidity(`Цена за ${accommodationTypes[Accommodation.TYPE.value].declension} должна быть больше ${evt.target.min} рублей`);
  } else if (evt.target.validity.rangeOverflow) {
    evt.target.setCustomValidity(`Цена за жилье должна быть меньше ${MAX_GENERAL_PRICE} рублей`);
  } else {
    evt.target.setCustomValidity('');
  }
});

Accommodation.CHECKIN.addEventListener('change', (evt) => {
  Accommodation.CHECKOUT.value = evt.target.value;
});

Accommodation.CHECKOUT.addEventListener('change', (evt) => {
  Accommodation.CHECKIN.value = evt.target.value;
});


Accommodation.ROOM_NUMBER.addEventListener('change', (evt) => {
  switch (evt.target.value) {
    case '1':
      Accommodation.CAPACITY.options[0].disabled = true;
      Accommodation.CAPACITY.options[1].disabled = true;
      Accommodation.CAPACITY.options[2].disabled = false;
      Accommodation.CAPACITY.options[3].disabled = true;
      Accommodation.CAPACITY.options[2].selected = true;
      break;
    case '2':
      Accommodation.CAPACITY.options[0].disabled = true;
      Accommodation.CAPACITY.options[1].disabled = false;
      Accommodation.CAPACITY.options[2].disabled = false;
      Accommodation.CAPACITY.options[3].disabled = true;
      Accommodation.CAPACITY.options[1].selected = true;
      break;
    case '3':
      Accommodation.CAPACITY.options[0].disabled = false;
      Accommodation.CAPACITY.options[1].disabled = false;
      Accommodation.CAPACITY.options[2].disabled = false;
      Accommodation.CAPACITY.options[3].disabled = true;
      Accommodation.CAPACITY.options[0].selected = true;
      break;
    case '100':
      Accommodation.CAPACITY.options[0].disabled = true;
      Accommodation.CAPACITY.options[1].disabled = true;
      Accommodation.CAPACITY.options[2].disabled = true;
      Accommodation.CAPACITY.options[3].disabled = false;
      Accommodation.CAPACITY.options[3].selected = true;
      break;
    default:
      Accommodation.CAPACITY.options[0].disabled = false;
      Accommodation.CAPACITY.options[1].disabled = false;
      Accommodation.CAPACITY.options[2].disabled = false;
      Accommodation.CAPACITY.options[3].disabled = false;
  }
});

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  sendData(
    () => {
      showModal(successModal);
      adForm.reset();
      /* Accommodation.ADDRESS.value = mainPinAddress; */
    },
    () => showModal(errorModal),
    new FormData(evt.target),
  );
}

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', formSubmitHandler);
};

setFilterInactive();
setFormInactive();

setUserFormSubmit();

export {
  Accommodation,
  setFilterActive,
  setFormActive
}
