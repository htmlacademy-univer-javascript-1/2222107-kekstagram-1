import {thumbnailClickHandler} from './pictures.js';

const template = document.querySelector('#picture').content;
const documentFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const addThumbnails = (photos) => {
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const picture = template.cloneNode(true);
    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;
    picture.querySelector('.picture').dataset.index = i;
    documentFragment.append(picture);
  }
  pictures.append(documentFragment);

  thumbnailClickHandler(photos);
  document.querySelector('.pictures__title').classList.remove('visually-hidden');
};

export {addThumbnails};
