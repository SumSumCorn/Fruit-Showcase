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

// console.log(fruits);

function changeFruit(fruit) {
  const fruitImage = fruits[fruit];
  const mainFruit = document.getElementById('main-fruit');
  mainFruit.src = fruitImage;

  mainFruit.style.animationName = '';
  // todo: 에니메이션 제작필요
  /*
  setTimeout(() => {
    mainFruit.style.animationName = 'rollIn';
    setTimeout(() => {
      mainFruit.style.animationName = '';
    }, 2000); // Reset animation after 2 seconds
  });
  */
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

// // Additional CSS for rolling animation
// document.styleSheets[0].insertRule(
//   `
//     @keyframes rollIn {
//         0% { transform: translateX(-100%); }
//         100% { transform: translateX(0); }
//     }
// `,
//   0
// );

// const gasp = require('gasp')
// const background = document.querySelector('#main-fruit');

// gsap.to(background, {
//   duration: 2,
//   // x: 100,
//   borderRadius: 100,
//   rotation: 360,
//   repeat: -1,
// });
