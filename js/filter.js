/* const mapFilters = document.querySelector('.map__filters');

const housingType = mapFilters.querySelector('#housing-type').value;
const housingPrice = mapFilters.querySelector('#housing-price').value;
const housingRooms = mapFilters.querySelector('#housing-rooms').value.toString();
const housingGuests = mapFilters.querySelector('#housing-guests').value.toString();
const checkedFeatures = mapFilters.querySelector('#housing-features').querySelectorAll('input[name="features"]:checked');

const filteredArray = (element) => {
  let isType = true;
  let isRooms = true;
  let isGuests = true;
  let isPrice = true;
  let isFeatures = true;

  if (checkedFeatures.length) {
    checkedFeatures.forEach((feature) => {
      if (element.offer.features.indexOf(feature.value) === -1) {
        isFeatures = false;
      }
    });
  }

  if (housingType !== 'any') {
    isType = element.offer.type === housingType;
  }
  if (housingRooms !== 'any') {
    isRooms = element.offer.rooms.toString() === housingRooms;
  }
  if (housingGuests !== 'any') {
    isGuests = element.offer.guests.toString() === housingGuests;
  }
  if (housingPrice !== 'any') {
    const elementPrice = element.offer.price.toString();
    let price;
    if (elementPrice < window.data.price.min) {
      price = HousePriceValue.LOW;
    }
    if (elementPrice > window.data.price.max) {
      price = HousePriceValue.HIGH;
    }
    if (elementPrice < window.data.price.max && elementPrice > window.data.price.min) {
      price = HousePriceValue.MIDDLE;
    }
    isPrice = price === housingPrice;
  }
  return isType && isRooms && isGuests && isPrice && isFeatures;
};


 */
