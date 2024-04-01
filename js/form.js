const form = document.querySelector('#form');
const launchBtn = document.querySelector('#launch-btn');
const goToFormButton = document.querySelector('#go-to-form-btn');
const userEmailField = document.querySelector('#user-email');
const userNameField = document.querySelector('#username');

let lastAnimationTime = 0; // Adding a variable to track the last time the animation was started

goToFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.scrollIntoView();
});

function clearFormFields() {
    const fieldName = form.querySelector('input[type="text"]');
    const fieldEmail = form.querySelector('input[type="email"]');

    fieldName.value = '';
    fieldEmail.value = '';
}

function addGooseElement() {
    const targetContainer = document.querySelector('#form');
    const gooseEl = document.createElement('img');
    gooseEl.classList.add('gus-anim');

    targetContainer.appendChild(gooseEl);
}

function showGooseAnim() {
    const gooseEl = document.querySelector('.gus-anim');

    gooseEl.setAttribute('src', './img/gus-anim.gif');
    

    setTimeout(() => {
        gooseEl.removeAttribute('src');
    }, 4000)
}

addGooseElement();

form.addEventListener('submit', e => {
    e.preventDefault();
    // Hide the previous error message (if it was shown)
    const errorMessage = document.querySelector('#error-message');
    errorMessage.style.display = 'none';

    // Checking if both fields are filled in
    if (!userNameField.value || !userEmailField.value) {
        // The fields are not filled in, show an error message
        errorMessage.textContent = 'Заповніть обидва поля!';
        errorMessage.style.display = 'block';
        return;
    }

    const formData = new FormData(form);

    // Checking whether both fields are filled in and whether 4 seconds have passed since the last animation started
    const currentTime = Date.now();
    if (userNameField.value && userEmailField.value && currentTime - lastAnimationTime >= 4000) {
        console.log('Імʼя користувача: ', userNameField.value);
        console.log('Email користувача: ', userEmailField.value);

        launchBtn.setAttribute('disabled', true);
        launchBtn.style.opacity = '0.7';

        showGooseAnim();

        setTimeout(() => {
            launchBtn.removeAttribute('disabled');
            launchBtn.style.opacity = '1';
        }, 4000);

        lastAnimationTime = currentTime; // Updating the time of the last animation start
    }
})
