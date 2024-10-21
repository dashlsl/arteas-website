const form = document.getElementById('register-form');
const firstName = document.getElementById('reg-firstname');
const lastName = document.getElementById('reg-lastname');
const email = document.getElementById('reg-email');
const password = document.getElementById('reg-password');
const password2 = document.getElementById('reg-password2');
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

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstNameValue === '') {
        setError(firstName, 'Name is required');
        isValid = false;
    } else {
        setSuccess(firstName);
    }

    if(lastNameValue === '') {
        setError(lastName, 'Name is required');
        isValid = false;
    } else {
        setSuccess(lastName);
    }

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
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        isValid = false;
    } else {
        setSuccess(password2);
    }

    return isValid;
};