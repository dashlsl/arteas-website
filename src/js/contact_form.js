const form = document.getElementById('contact-form');
const cName = document.getElementById('contact-name');
const phoneNum = document.getElementById('contact-phonenum');
const email = document.getElementById('contact-email');
const message = document.getElementById('contact-message');
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

    const nameValue = cName.value.trim();
    const phoneNumValue = phoneNum.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === '') {
        setError(cName, 'Name is required');
        isValid = false;
    } else {
        setSuccess(cName);
    }

    if(phoneNumValue === '') {
        setError(phoneNum, 'Phone Number is required');
        isValid = false;
    } else if (phoneNumValue.length < 10 ) {
        setError(phoneNum, 'Phone number must be at least 10 digits long');
        isValid = false;    
    } else {
        setSuccess(phoneNum);
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

    if(messageValue === '') {
        setError(message, 'A message is required');
        isValid = false;
    } else {
        setSuccess(message);
    }

    return isValid;
};