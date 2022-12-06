/* eslint-disable no-console */
import './utils.js';
import {addPhotos} from './data.js';
import {addThumbnails} from './thumbnails.js';
import './form.js';

addThumbnails(addPhotos());
