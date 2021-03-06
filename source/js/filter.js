const Price = {
  LOW: 10000,
  HIGH: 50000,
}

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');


const filterByType = (announcementsList) => {
  return (announcementsList.offer.type === housingType.value) || (housingType.value === 'any');
};

const filterByPrice = (announcementsList) => {
  switch (housingPrice.value) {
    case 'low':
      return announcementsList.offer.price < Price[housingPrice.value.toUpperCase()];
    case 'middle':
      return (announcementsList.offer.price >= Price['LOW']) && (announcementsList.offer.price <= Price['HIGH']);
    case 'high':
      return announcementsList.offer.price > Price[housingPrice.value.toUpperCase()];
    case 'any':
      return announcementsList;
  }
};

const filterByRooms = (announcementsList) => {
  return (announcementsList.offer.rooms === parseInt(housingRooms.value, 10)) || (housingRooms.value === 'any');
};

const filterByGuests = (announcementsList) => {
  return (announcementsList.offer.guests === parseInt(housingGuests.value, 10)) || (housingGuests.value === 'any');
};

const filterByFeatures = (announcementsList) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');
  return Array.from(checkedFeatures).every((input) => {
    return announcementsList.offer.features.includes(input.value);
  });
};

const filterAnnouncements = (announcementsList) => {
  return announcementsList.filter((element) => {
    return filterByType(element) && filterByPrice(element) && filterByRooms(element) && filterByGuests(element) && filterByFeatures(element);
  })
}

export {
  mapFilters,
  filterAnnouncements
}
