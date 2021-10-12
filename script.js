const form = document.querySelector('form');
const email = document.querySelector('input[type=email]');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let emailValue = email.value;
    console.log(email.value);

    if(validateEmail(emailValue)) {
        error.classList.remove('open');
    }
    else {
        error.classList.add('open');
    }
    
});

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}