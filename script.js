fruitNames = [
  'cherry',
  'strawberry',
  'grapes',
  'hallabong',
  'persimmon',
  'apple',
  'pear',
  'peach',
  'pineapple',
  'melon',
  'watermelon',
];

const fruits = {};

fruitNames.forEach((fruit) => {
  fruits[fruit] = 'assets/' + fruit + '.png';
});

function changeFruit(fruit) {
  const fruitImage = fruits[fruit];
  const mainFruit = document.getElementById('main-fruit');
  mainFruit.src = fruitImage;

  mainFruit.style.animationName = '';
}

const audio = document.getElementById('myAudio');
const toggleButton = document.getElementById('music-button');
function toggleAudio() {
  if (audio.paused) {
    toggleButton.textContent = '🔈';
    audio.play();
  } else {
    toggleButton.textContent = '🔇';
    audio.pause();
  }
}
