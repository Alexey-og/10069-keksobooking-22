/* global L:readonly */

import {
  Accommodation,
  setFilterActive,
  setFormActive
} from './form.js';

/* import {
  CARDS_QUANTITY,
  createCardsList
} from './data.js'; */

import {
  renderPopup
} from './render-popup.js';

const TokyoCenter = {
  LAT: 35.66566,
  LNG: 139.76103,
};

const DIGITS = 5;
const ZOOM = 10;

const map = L.map('map-canvas')
  .on('load', () => {
    setFilterActive();
    setFormActive();
    Accommodation.ADDRESS.value = `${TokyoCenter.LAT}, ${TokyoCenter.LNG}`;
  })
  .setView({
    lat: TokyoCenter.LAT,
    lng: TokyoCenter.LNG,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TokyoCenter.LAT,
    lng: TokyoCenter.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  Accommodation.ADDRESS.value = `${evt.target.getLatLng().lat.toFixed(DIGITS)}, ${evt.target.getLatLng().lng.toFixed(DIGITS)}`;
});

/* const cardsList = createCardsList(CARDS_QUANTITY); */

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((ads) => {
    ads.forEach((ad) => {
      const icon = L.icon({
        iconUrl: './img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker(
        {
          lat: ad.location.lat,
          lng: ad.location.lng,
        },
        {
          icon,
        },
      );

      marker
        .addTo(map)
        .bindPopup(
          renderPopup(ad),
          {
            keepInView: true,
          },
        );
    });
  });


/* cardsList.forEach((card) => {
  const lat = card.location.x;
  const lng = card.location.y;

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      renderPopup(card),
      {
        keepInView: true,
      },
    );
}); */
