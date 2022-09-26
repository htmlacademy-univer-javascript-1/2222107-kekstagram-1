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

const array_objects = [];

const random_number =(min, max) => {
  if (min < 0 || max < 0) {
    return -1
  }
  if (min > max) {
    [min, max] = [max, min]
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const array_comments = (count) => {
  const array = [];
  for(let i = 0; i < count; i++){
    array.push({
      id: i,
      avatar: `img/avatar-${random_number(1, 6)}.svg`,
      message: MESSANGES[random_number(0, MESSANGES.length - 1)],
      name: NAME[random_number(0,NAME.length - 1)]
    });
  }
  return array;
};

const add_photos = () => {
  for(let i = 0; i < OBJECT; i++) {
    array_objects.push({
      id: i,
      url: `photos/${i + 1}.jpg`,
      description: DESCRIPTION[random_number(0, DESCRIPTION.length - 1)],
      likes: random_number(15,200),
      comments: array_comments(random_number(0, 2))
    });
  }
};

add_photos();
console.log(array_objects);
