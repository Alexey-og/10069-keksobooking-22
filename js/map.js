/* global L:readonly */

import {
  Accommodation,
  setFilterActive,
  setFormActive
} from './form.js';

import {
  renderAnnouncement
} from './render-announcement.js';

import {
  getData
} from './create-fetch.js';

const DIGITS = 5;
const ZOOM = 10;
const ANNOUNCEMENT_LIMIT = 10;

const tokyoCenter = {
  lat: 35.66566,
  lng: 139.76103,
};

const tokyoMap = L.map('map-canvas');

tokyoMap.on('load', () => {
  setFilterActive();
  setFormActive();
}).setView(tokyoCenter, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(tokyoMap);


const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  tokyoCenter,
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(tokyoMap);

Accommodation.ADDRESS.value = `${tokyoCenter.lat}, ${tokyoCenter.lng}`;

mainPinMarker.on('move', (evt) => {
  Accommodation.ADDRESS.value = `${evt.target.getLatLng().lat.toFixed(DIGITS)}, ${evt.target.getLatLng().lng.toFixed(DIGITS)}`;
});


const tokyoPinsLayer = L.layerGroup();

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const getPinHandler = (announcementsList) => {
  announcementsList.slice(0, ANNOUNCEMENT_LIMIT).forEach(({ author, offer, location }) => {
    const marker = L.marker({
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: pinIcon,
    },
    );

    marker
      .addTo(tokyoPinsLayer)
      .bindPopup(
        renderAnnouncement({ author, offer, location }),
      );

    tokyoPinsLayer.addTo(tokyoMap);
  });
}

getData(getPinHandler, () => {});


tokyoPinsLayer.clearLayers();  /*  Не срабатывает!   */
