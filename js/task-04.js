const numberOfCount = document.querySelector("#value");

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrement = () => {
    numberOfCount.textContent = counterValue -= 1
};

const increment = () => {
    numberOfCount.textContent = counterValue += 1;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);