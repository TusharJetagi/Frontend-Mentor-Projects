const email = document.querySelector('input');
const form = document.querySelector('.form');
const errMsg = document.querySelector('.error');
const successMsg = document.querySelector('.success-container');
const mainPage = document.querySelector('.main-container');
const disMissBtn = document.querySelector('.dismiss');
const userEmail = document.querySelector('.userEmail');

document.addEventListener('DOMContentLoaded', () => {
    email.value = '';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


function validateInputs() {
    const emailValue = email.value.trim();

    if (!isValidEmail(emailValue)) {
        errMsg.style.display = 'block';
        email.classList.add('error');
    } else if (isValidEmail(emailValue)) {
        successMsg.style.visibility = 'visible';
        mainPage.style.display = 'none';
        userEmail.textContent = `${emailValue}`;
    }
    else {
        errMsg.style.display = 'none';
        email.classList.remove('error');
    }
}

disMissBtn.addEventListener('click', () => {
    successMsg.style.visibility = 'hidden';
    mainPage.style.display = 'flex';
    email.value = '';
});


email.addEventListener('click', () => {
    errMsg.style.display = 'none';
    email.classList.remove('error');
});