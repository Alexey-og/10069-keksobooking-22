const adForm = document.querySelector('.ad-form');

const Accommodations = {
  title: adForm.querySelector('#title'),
  address: adForm.querySelector('#address'),
  type: adForm.querySelector('#type'),
  price: adForm.querySelector('#price'),
  checkin: adForm.querySelector('#timein'),
  checkout: adForm.querySelector('#timeout'),
  roomNumber: adForm.querySelector('#room_number'),
  capacity: adForm.querySelector('#capacity'),
};

const MinPrices = {
  bungalo: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

Accommodations.type.addEventListener('change', () => {
  Accommodations.price.placeholder = MinPrices[Accommodations.type.value];
  Accommodations.price.min = MinPrices[Accommodations.type.value];
});


Accommodations.checkin.addEventListener('change', () => {
  Accommodations.checkout.value = Accommodations.checkin.value;
});

Accommodations.checkout.addEventListener('change', () => {
  Accommodations.checkin.value = Accommodations.checkout.value;
});
