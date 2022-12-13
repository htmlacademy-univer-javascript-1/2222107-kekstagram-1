/* eslint-disable no-console */
import './utils.js';
// import {addPhotos} from './data.js';
import {addThumbnails} from './thumbnails.js';
import './form.js';
import {setUserFormSubmit, closeUploadFileForm} from './form.js';
import {getData} from './api.js';
import './pictures.js';
import {showError, showSuccess} from './alerts.js';

// addThumbnails(addPhotos());

getData(addThumbnails);

setUserFormSubmit(() => {
  closeUploadFileForm();
  showSuccess();
}, () => {
  closeUploadFileForm(null, false);
  showError();
});
