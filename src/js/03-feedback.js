import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
// console.log(form);
const input = document.querySelector('input');

const textarea = document.querySelector('textarea');
autoLookText();

// console.log(input);
// console.log(label);
// console.log(textarea);

let formData = {};

form.addEventListener('input',throttle(textTime, 500));

function textTime() {
  formData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function autoLookText() {
  const saveText = localStorage.getItem('feedback-form-state');
  const parseText = JSON.parse(saveText);
  if (saveText) {
    input.value = parseText.email || '';
    textarea.value = parseText.message || '';
  }
}

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const obj = {
    email: input.value,
    message: textarea.value,
  };
  console.log(obj);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

