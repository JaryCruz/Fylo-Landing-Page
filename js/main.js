const emailInput = document.querySelector('[data-input]');
const submitBtn = document.querySelector('[data-submit-btn]');
const errorMessage = document.querySelector('[data-error-message]');

submitBtn.addEventListener('click', submitEmail);

// Prevents submissions & validates input
function submitEmail(e) {
  e.preventDefault();

  validateEmail();
}

// Checks the email has the correct format
function validateEmail() {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailInput.value.match(validRegex)) {
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
  }
}