/* eslint-disable no-console */
import './util.js';
import {addPhotos} from './data.js';
import {addThumbnails} from './thumbnails.js';
import './form.js';

addThumbnails(addPhotos());
