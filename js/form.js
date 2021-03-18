import {
  accommodationTypes
} from './render-announcement.js';

import {
  sendData
} from './create-fetch.js';

import {
  showModal,
  successModal,
  errorModal
} from './modal.js';

/*  Функции деактивации и активации полей формы фильтрации жилья и формы создания собственного объявления  */

const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelectorAll('.map__filter');
const features = document.querySelector('.map__features');
const adFormElement = adForm.querySelectorAll('.ad-form__element');

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


setFilterInactive();
setFormInactive();

/* ------ */


/*  Взаимодействие пользователя с полями формы создания собственного объявления  */

const Accommodation = {
  TITLE: adForm.querySelector('#title'),              // Заголовок объявления
  ADDRESS: adForm.querySelector('#address'),          // Адрес (координаты)
  TYPE: adForm.querySelector('#type'),                // Тип жилья
  PRICE: adForm.querySelector('#price'),              // Цена за ночь, руб.
  CHECKIN: adForm.querySelector('#timein'),           // Время заезда
  CHECKOUT: adForm.querySelector('#timeout'),         // Время выезда
  ROOM_NUMBER: adForm.querySelector('#room_number'),  // Количество комнат
  CAPACITY: adForm.querySelector('#capacity'),        // Количество мест
};


Accommodation.TITLE.addEventListener('input', (evt) => {
  document.querySelector('.char-counter').textContent = `( ${evt.target.value.length} / 100 символов )`;
});

Accommodation.TITLE.addEventListener('change', (evt) => {
  let customValidity = '';
  const titleValidityStates = {
    tooShort: 'Слишком короткий заголовок. Длина должна быть минимум 30 символов',
    tooLong: 'Слишком длинный заголовок',
    valueMissing: 'Заголовок должен быть обязательно заполнен',
  };
  for (let state in titleValidityStates) {
    if (evt.target.validity[state]) {
      customValidity = titleValidityStates[state];
    }
  }
  Accommodation.TITLE.setCustomValidity(customValidity);
  Accommodation.TITLE.reportValidity();
});


const MAX_GENERAL_PRICE = 1000000;

Accommodation.PRICE.min = accommodationTypes[Accommodation.TYPE.value].minPrice;
Accommodation.PRICE.max = MAX_GENERAL_PRICE;

Accommodation.TYPE.addEventListener('change', (evt) => {
  Accommodation.PRICE.placeholder = accommodationTypes[evt.target.value].minPrice;
  Accommodation.PRICE.min = accommodationTypes[evt.target.value].minPrice;
  Accommodation.PRICE.value = '';
});

Accommodation.PRICE.addEventListener('change', (evt) => {
  let customValidity = '';
  const priceValidityStates = {
    valueMissing: 'Введите цену',
    rangeUnderflow: `Цена за ${accommodationTypes[Accommodation.TYPE.value].declension} должна быть больше ${evt.target.min} рублей`,
    rangeOverflow: `Цена за жилье должна быть меньше ${MAX_GENERAL_PRICE} рублей`,
  };
  for (let state in priceValidityStates) {
    if (evt.target.validity[state]) {
      customValidity = priceValidityStates[state];
    }
  }
  Accommodation.PRICE.setCustomValidity(customValidity);
  Accommodation.PRICE.reportValidity();
});


Accommodation.CHECKIN.addEventListener('change', (evt) => {
  Accommodation.CHECKOUT.value = evt.target.value;
});

Accommodation.CHECKOUT.addEventListener('change', (evt) => {
  Accommodation.CHECKIN.value = evt.target.value;
});


const RoomsCapacity = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
}

const setRoomsCapacity = (rooms, guests) => {
  for (let guest of guests.children) {
    if (RoomsCapacity[rooms.value].includes(guest.value)) {
      guest.disabled = false;
      guest.selected = true;
    } else {
      guest.disabled = true;
    }
  }
}

Accommodation.ROOM_NUMBER.addEventListener('change', () => {
  setRoomsCapacity(Accommodation.ROOM_NUMBER, Accommodation.CAPACITY);
});

/* ------ */


/*  Обработка событий при отправке формы создания пользовательского объявления  */

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => {
      showModal(successModal);
      adForm.reset();
    },
    () => showModal(errorModal),
    new FormData(evt.target),
  );
});

/* ------ */


export {
  Accommodation,
  setFilterActive,
  setFormActive
}
