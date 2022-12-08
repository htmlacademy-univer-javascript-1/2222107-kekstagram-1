import {isEscapeKey} from './utils.js';

const COUNT_COMMENTS = 5;

const bigPictureSection = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');
const bigPicture = bigPictureSection.querySelector('.big-picture');
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img');
const likesCount = bigPictureSection.querySelector('.likes-count');
const commentsCount = bigPictureSection.querySelector('.comments-count');
const socialComments = bigPictureSection.querySelector('.social__comments');
/*const socialCommentsElem = socialComments.querySelector('.social__comment');*/

const socialCaption = bigPictureSection.querySelector('.social__caption');
const socialCommentCount = bigPictureSection.querySelector('.social__comment-count');
const commentsLoader = bigPictureSection.querySelector('.comments-loader');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const closeModal = (evt) => {
  if (isEscapeKey(evt) || evt.type === 'click') {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeModal);
    bigPictureCancel.removeEventListener('click', closeModal);
  }
};

const drawComment = (comment) => {
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
};

const drawComments = (comments, count) => {
  socialComments.innerHTML = '';
  comments.forEach((comment, index) => {
    if (count > index) {
      drawComment(comment);
    }
  });
};

const showCommentsCount = (image, commentsNumber) => {
  drawComments(image.comments, commentsNumber);
  socialCommentCount.innerHTML = `${commentsNumber > commentsCount.textContent ? commentsCount.textContent : commentsNumber} из `;
  socialCommentCount.append(commentsCount);
  socialCommentCount.innerHTML += ' комментариев';
  if (commentsNumber > commentsCount.textContent) {
    commentsLoader.classList.add('hidden');
  }
};

const openModal = (image) => {
  let commentsNumber = COUNT_COMMENTS;
  bigPictureImg.src = image.url;
  bigPictureImg.alt = image.description;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  socialCaption.textContent = image.description;

  commentsLoader.classList.remove('hidden');
  showCommentsCount(image, commentsNumber);

  commentsLoader.addEventListener('click', () => {
    commentsNumber += COUNT_COMMENTS;
    showCommentsCount(image, commentsNumber);
  });

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
