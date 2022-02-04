// Custom Scripts
const errorEmail = document.querySelector('.error-email');
const errorPassword = document.querySelector('.error-password');
const errorReset = document.querySelector('.error-reset');

const inputEmail = document.querySelector('.form__email');
const inputPassword = document.querySelector('.form__password');
const inputEmailReset = document.querySelector('.email-reset');

const inputText = document.querySelector('.form__reset-text');

const signInForm = document.querySelector('.sighIn__form');
const resetForm = document.querySelector('.reset__form');
const buttonOnResetForm = document.querySelector('.link__reset');

const resetSuccess = document.querySelector('.reset__success');
const resetSendButton = document.querySelector('.reset__send-btn');
const formSignInReset = document.querySelector('.form__sighIn-reset');

const passShowBtn = document.querySelector('.form__passShow-btn');

resetSendButton.disabled = true;
inputEmailReset.addEventListener('input', e => {
  if (!e.target.value) {
    errorReset.classList.add('active');
    inputEmailReset.classList.add('isInvalid');
    inputText.classList.add('hidden');
    resetSendButton.disabled = true;
  } else {
    errorReset.classList.remove('active');
    inputEmailReset.classList.remove('isInvalid');
    inputText.classList.remove('hidden');
    resetSendButton.disabled = false;
  }
});

inputEmail.addEventListener('input', e => {
  if (!e.target.value) {
    errorEmail.classList.add('active');
    inputEmail.classList.add('isInvalid');
  } else {
    errorEmail.classList.remove('active');
    inputEmail.classList.remove('isInvalid');
  }
});

inputPassword.addEventListener('input', e => {
  if (!e.target.value) {
    errorPassword.classList.add('active');
    inputPassword.classList.add('isInvalid');
  } else {
    errorPassword.classList.remove('active');
    inputPassword.classList.remove('isInvalid');
  }
});

buttonOnResetForm.addEventListener('click', e => {
  e.preventDefault();
  signInForm.classList.add('hidden');
  resetForm.classList.add('visible');
});

resetSendButton.addEventListener('click', e => {
  resetSuccess.classList.add('visible');
  formSignInReset.classList.add('hidden');
});
formSignInReset.addEventListener('submit', e => {
  e.preventDefault();
});

passShowBtn.addEventListener('click', e => {
  passShowBtn.classList.toggle('clicked');
  if (passShowBtn.classList.contains('clicked')) {
    inputPassword.setAttribute('type', 'text');
  } else {
    inputPassword.setAttribute('type', 'password');
  }
});

