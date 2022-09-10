const body = document.querySelector('.widget');
const nameColor = document.querySelector('.color');
const clickChange = document.querySelector('.change-color');

const bodyColor = () => {
  const randomColor = getRandomHexColor();
  nameColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

clickChange.addEventListener('click', bodyColor);