const button = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');
let count = 0;
let colorCycle = 1;

button.addEventListener('click', function() {
  count++;
  clickCount.textContent = count;

  if (colorCycle <= 3) {
    button.classList.remove(`color${colorCycle}`);
    colorCycle++;
    button.classList.add(`color${colorCycle}`);
  } else {
    colorCycle = 1; 
    button.classList.remove('color3');
    button.classList.add('color1');
  }
});
