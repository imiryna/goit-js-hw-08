import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onFormInput, 500));

populateMessage();

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateMessage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const messageParse = JSON.parse(savedMessage);

  if (messageParse) {
    feedbackForm.email.value = messageParse.email;
    feedbackForm.message.value = messageParse.message;
  }
}
