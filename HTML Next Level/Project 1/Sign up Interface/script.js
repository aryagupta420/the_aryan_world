// Sign-up form validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Simple password confirmation validation
  if (password !== confirmPassword) {
    event.preventDefault();
    alert("Passwords do not match!");
  }
});

// Smooth scroll for links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
