const inputField = document.querySelector('#validation-input');

const verificationInput = (event) => {

    const dataLength = +inputField.dataset.length;
    const inputUser = event.currentTarget;

    if (inputUser.value.length === dataLength) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
    } else {
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');
    }
};

inputField.addEventListener('blur', verificationInput);