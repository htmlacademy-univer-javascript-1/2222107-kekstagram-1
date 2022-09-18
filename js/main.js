function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function checkStringLenght(str, maxLenght) {
  if (str.length <= maxLenght){
    return true
  }return false
}

console.log(getRandomInt(0, 141))
console.log(checkStringLenght('Привет', 140))
