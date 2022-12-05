import {isEscapeKey} from './util.js';

const bigPictureSection = document.querySelector('.big-picture');

const pictures = bigPictureSection.querySelector('.pictures');
const bigPicture = bigPictureSection.querySelector('.big-picture');
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img');
const likesCount = bigPictureSection.querySelector('.likes-count');
const commentsCount = bigPictureSection.querySelector('.comments-count');
const socialComments = bigPictureSection.querySelector('.social__comments');
const socialCommentsElem = socialComments.querySelector('.social__comment');

/* const socialCaption = bigPictureSection.querySelector('.social__caption');*/
const socialCommentCount = bigPictureSection.querySelector('.social__comment-count');
const commentsLoader = bigPictureSection.querySelector('.comments-loader');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const onModalEscKeydown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
};


const openModal = (evt, data) => {
  const picture = evt.target.closest('.picture');

  if (picture) {
    const image = data[picture.dataset.index];

    bigPictureSection.classList.remove('hidden');

    for (let i = 0; i < commentsCount; i++) {
      const comment = socialCommentsElem.cloneNode(true);
      bigPictureImg.src = image.url;
      bigPictureImg.alt = image.description;
      likesCount.textContent = image.likes;
      socialComments.appendChild(comment);
    }

    bigPictureImg.src = image.url;
    likesCount.textContent = image.likes;
    bigPictureImg.alt = image.description;

    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');

    document.addEventListener('keydown', onModalEscKeydown);
  }
};

const thumbnailClickHandler = (data) => {
  pictures.addEventListener('click', (evt) => openModal(evt, data));
  bigPictureCancel.addEventListener('click', closeModal);
};

export {thumbnailClickHandler};
