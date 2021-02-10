/* const AVATARS_QUANTITY = 8; */
const CARDS_QUANTITY = 10;

const Coords = {
  MIN_X: 35.65000,
  MAX_X: 35.70000,
  MIN_Y: 139.70000,
  MAX_Y: 139.80000,
  DIGITS: 5,
};

const titles = [
  'Лучшее место отдохнуть от всех',
  'Отличный выбор для двоих',
  'Уединенное место для романтического уикенда',
  'Места хватит даже для самой большой компании',
  'Шикарные апартаменты для знающих себе цену людей',
  'Рукой подать до всех главных достопримечательностей',
  'Самый выгодный выбор за минимальные деньги',
];

const Prices = {
  MIN: 0,
  MAX: 1000000,
};

const accommodationTypes = {
  bungalo: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
};

const RoomsQuantity = {
  MIN: 1,
  MAX: 10,
};

const QuestsQuantity = {
  MIN: 1,
  MAX: 50,
};

const checkinTimes = [
  '12:00',
  '13:00',
  '14:00',
];

const checkoutTimes = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const descriptions = [
  'Комфортное и недорогое жилье в самом центре города. В пешей доступности находятся сразу несколько круглосуточных супермаркетов.',
  'Жилье находится на тихой улочке. Со всех сторон разбиты красивые сады.',
  'Жилье прямо у станции метро. Можно легко добраться до любого уголка города.',
  'Уютное жилье для спокойного отдыха, вдали от шумных кварталов города.',
  'Идеальный вариант для любителей шопинга: совсем рядом сразу несколько рынков и эксклюзивных бутиков.',
  'Отличный вариант для семейного отдыха, с возможностью готовить еду на полностью оборудованной кухне.',
  'Рядом находятся все самые популярные достопримечательности. Вам даже не придется тратить деньги на транспорт.',
  'Из окон открывается прекрасный вид на центральный бульвар с пышной растительностью',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

export {
  CARDS_QUANTITY,
  titles,
  accommodationTypes,
  checkinTimes,
  checkoutTimes,
  features,
  descriptions,
  photos,
  Coords,
  Prices,
  RoomsQuantity,
  QuestsQuantity
};
