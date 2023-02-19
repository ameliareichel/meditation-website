//Newsletter validation:
const form = document.getElementById('newsletter-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Newsletter validation function:
const newsletterValidation = (e) => {
    if (nameField.value === null || nameField.value === '') {
        e.preventDefault();
        nameField.style.borderColor = 'red';
    }
    else {
        nameField.style.borderColor = '#283028';
    }

    if (!emailValid.test(emailField.value)) {
        e.preventDefault();
        emailField.style.borderColor = 'red';
    }
    else {
        emailField.style.borderColor = '#283028';
    }

    return false;
}

form.addEventListener('submit', newsletterValidation);
window.onbeforeunload = () => {
    form.reset();
}