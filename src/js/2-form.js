const formData = { email: '', message: '' };
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

loadFormData();

function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

emailInput.addEventListener('input', event => {
  formData.email = event.target.value;
  saveFormData();
});

messageInput.addEventListener('input', event => {
  formData.message = event.target.value;
  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields.');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
