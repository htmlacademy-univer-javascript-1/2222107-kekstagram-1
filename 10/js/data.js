import {randomNumber, identificationGenerator} from './utils.js';

const OBJECT = 25;

const NAME = [
  'Николай',
  'Король Артур',
  'Альбус Северус Поттер',
  'Дарт Вейдер',
];

const MESSANGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Милый песик',
  'Нафотографировал тут',
  'Обожаю это фотку',
  'Чтоб я так жил',
];

const createArrayComments = () => ({
  id: identificationGenerator()(),
  avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
  message: MESSANGES[randomNumber(0, MESSANGES.length - 1)],
  name: NAME[randomNumber(0,NAME.length - 1)],
});

const addPhoto = () => ({
  id: identificationGenerator()(),
  url: `photos/${randomNumber(1, OBJECT)}.jpg`,
  description: DESCRIPTION[randomNumber(0, DESCRIPTION.length - 1)],
  likes: randomNumber(15,200),
  comments: Array.from({length: randomNumber(1, 12)}, createArrayComments)
});
const addPhotos = () => Array.from({length: OBJECT}, addPhoto);

export {addPhotos};
