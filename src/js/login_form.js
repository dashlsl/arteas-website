const form = document.getElementById('login-form');
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
const successMessage = document.querySelector('.form-success-message');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        showSuccessMessage();
    }
});

const showSuccessMessage = () => {
    form.style.display = 'none';
    successMessage.style.display = 'block';
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-error');

    errorDisplay.innerText = message;
    inputControl.classList.add('form-error');
    inputControl.classList.remove('form-success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-error');

    errorDisplay.innerText = '';
    inputControl.classList.add('form-success');
    inputControl.classList.remove('form-error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    let isValid = true;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else {
        setSuccess(password);
    }

    return isValid;
};

