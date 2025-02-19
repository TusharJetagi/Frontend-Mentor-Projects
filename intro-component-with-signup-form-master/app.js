const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const errorIcon = document.querySelectorAll('form div img');
const errMsg = document.querySelectorAll('.error');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    inputs.forEach((input, i) => {
        const inputType = input.getAttribute('type');
        if (input.value.trim() === '') { // Check for empty input
            if (errorIcon[i]) errorIcon[i].style.display = 'block';
            if (errMsg[i]) errMsg[i].style.display = 'block';
        } else if (inputType === 'email' && !isValidEmail(input.value.trim())) {
            if (errorIcon[i]) errorIcon[i].style.display = 'block';
            if (errMsg[i]) errMsg[i].style.display = 'block';
        }
        else {
            if (errorIcon[i]) errorIcon[i].style.display = 'none';
            if (errMsg[i]) errMsg[i].style.display = 'none';
        }
    });
}
);

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}