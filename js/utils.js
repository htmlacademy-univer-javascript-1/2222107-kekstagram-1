import {addThumbnails} from './thumbnails.js';
import {setFilter, showFilters, TIMEOUT_DELAY} from './filters.js';

const randomNumber =(min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElementFromArray = (array) => array[randomNumber(0, array.length - 1)];

const checkStringLength = (str, max) => str.length <= max;

const isEscapeKey = (event) => event.key === 'Escape';

const identificationGenerator = () => {
  let identification = 0;

  return () => ++identification;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

const shuffleArray = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const onSuccess = (data) => {
  const photos = data.slice();
  addThumbnails(photos);
  showFilters();
  setFilter(debounce((filterData) => addThumbnails(filterData(data)), TIMEOUT_DELAY));
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.left = 0;
  messageAlert.style.top = 0;
  messageAlert.style.right = 0;
  messageAlert.style.textAlign = 'center';
  messageAlert.style.fontSize = '30px';
  messageAlert.style.backgroundColor = 'red';
  messageAlert.style.padding = '10px 5px';
  messageAlert.textContent = 'Ошибка загрузки данных';
  document.body.append(messageAlert);
};



export {
  randomNumber,
  checkStringLength,
  getRandomElementFromArray,
  identificationGenerator,
  isEscapeKey,
  onSuccess,
  onFail,
  throttle,
  shuffleArray
};

