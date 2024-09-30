// Login form validation
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simple validation logic (just for demonstration)
  if (username === '' || password === '') {
    showErrorMessage('Username and password are required.');
  } else if (username !== 'admin' || password !== 'password') {
    showErrorMessage('Invalid username or password.');
  } else {
    // Simulate a success login and redirect to home.html
    loginForm.style.opacity = '0';
    setTimeout(() => {
      window.location.href = 'home.html'; // Redirect to a homepage or another dashboard
    }, 500); // Delay to allow animation before redirect
  }
});

// Function to display error message with animation
function showErrorMessage(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  errorMessage.style.opacity = '0';
  setTimeout(() => {
    errorMessage.style.opacity = '1'; // Fade-in effect
  }, 100);
}
