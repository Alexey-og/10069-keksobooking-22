import './map.js';
import './form.js';
import './validate.js';
import './filter.js';
import './avatar.js';

import {
  showModal
} from './modal.js';

import {
  getData
} from './create-fetch.js';

import {
  renderPins,
  removePins
} from './map.js';

import {
  mapFilters,
  filterAnnouncements
} from './filter.js';

import {
  debounce
} from './util.js';


const ANNOUNCEMENT_LIMIT = 10;
const RERENDER_DELAY = 500;

getData((data) => {
  renderPins(data.slice(0, ANNOUNCEMENT_LIMIT));
  mapFilters.addEventListener('change', debounce(() => {
    removePins();
    renderPins(filterAnnouncements(data).slice(0, ANNOUNCEMENT_LIMIT));
  }, RERENDER_DELAY));
}, showModal);
