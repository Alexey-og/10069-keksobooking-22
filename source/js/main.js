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
  setMapFiltersChange,
  ANNOUNCEMENT_LIMIT
} from './map.js';

import {
  setFormSubmit,
  setFormReset
} from './form.js';

getData(
  (data) => {
    renderPins(data.slice(0, ANNOUNCEMENT_LIMIT));
    setMapFiltersChange(data);
    setFormSubmit(data);
    setFormReset(data);
  },
  showModal);
