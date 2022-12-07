import {isEscapeKey} from './utils.js';

const bigPictureSection = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');
const bigPicture = bigPictureSection.querySelector('.big-picture');
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img');
const likesCount = bigPictureSection.querySelector('.likes-count');
const commentsCount = bigPictureSection.querySelector('.comments-count');
const socialComments = bigPictureSection.querySelector('.social__comments');
const socialCommentsElem = socialComments.querySelector('.social__comment');

const socialCaption = bigPictureSection.querySelector('.social__caption');
const socialCommentCount = bigPictureSection.querySelector('.social__comment-count');
const commentsLoader = bigPictureSection.querySelector('.comments-loader');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const closeModal = (e) => {
  if (isEscapeKey(e) || e.type === 'click') {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeModal);
    bigPictureCancel.removeEventListener('click', closeModal);
  }
};

const openModal = (image) => {
  bigPictureImg.src = image.url;
  bigPictureImg.alt = image.description;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  socialComments.innerHTML = '';

  for (let i = 0; i < commentsCount; i++) {
    const comment = socialCommentsElem.cloneNode(true);
    const li = document.createElement('li');
    li.classList.add('social__comment');
    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = 35;
    img.height = 35;
    li.append(img);
    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = comment.message;
    li.append(p);
    socialComments.append(li);
  }
  socialCaption.textContent = image.description;

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeModal);
  bigPictureCancel.addEventListener('click', closeModal);
};

const thumbnailClickHandler = (data) => {
  pictures.addEventListener('click', (e) => {
    const picture = e.target.closest('.picture');

    if (picture) {
      openModal(data[picture.dataset.index]);
    }
  });
};

export {thumbnailClickHandler};
