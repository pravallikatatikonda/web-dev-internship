document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Get error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // Validate name
  if (name === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // ✅ Corrected Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // Validate message
  if (message === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  }

  // Show success message
  if (isValid) {
    successMessage.textContent = 'Thank you! Your message has been sent.';
    document.getElementById('contactForm').reset();
  }
});
