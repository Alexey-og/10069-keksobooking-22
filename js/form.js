const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelectorAll('.map__filter');
const features = document.querySelector('.map__features');
const adFormElement = adForm.querySelectorAll('.ad-form__element');

const Accommodations = {
  TITLE: adForm.querySelector('#title'),
  ADDRESS: adForm.querySelector('#address'),
  TYPE: adForm.querySelector('#type'),
  PRICE: adForm.querySelector('#price'),
  CHECKIN: adForm.querySelector('#timein'),
  CHECKOUT: adForm.querySelector('#timeout'),
  ROOM_NUMBER: adForm.querySelector('#room_number'),
  CAPACITY: adForm.querySelector('#capacity'),
};

const MinPrices = {
  bungalo: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

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

Accommodations.TYPE.addEventListener('change', () => {
  Accommodations.PRICE.placeholder = MinPrices[Accommodations.TYPE.value];
  Accommodations.PRICE.min = MinPrices[Accommodations.TYPE.value];
});

Accommodations.CHECKIN.addEventListener('change', () => {
  Accommodations.CHECKOUT.value = Accommodations.CHECKIN.value;
});

Accommodations.CHECKOUT.addEventListener('change', () => {
  Accommodations.CHECKIN.value = Accommodations.CHECKOUT.value;
});


setFilterInactive();
setFormInactive();

export {
  Accommodations,
  setFilterActive,
  setFormActive
}
