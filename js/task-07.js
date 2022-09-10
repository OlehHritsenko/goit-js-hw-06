const controlField = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');
sizeText.style.fontSize = '56px';

const changingSize = () => sizeText.style.fontSize = `${controlField.value}px`;

controlField.addEventListener('input', changingSize);