const getRandomInt = (min, max) => {
  if (min < 0 || max > 0) {
    return -1
  }
  if (min > max) {
    [min, max] = [max, min]
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const checkStringLenght = (str, max) => str.length <= max;

console.log(getRandomInt(0, 141))
console.log(checkStringLenght('Привет', 140))
