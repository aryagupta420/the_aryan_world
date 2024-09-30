document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('main input');

  // Animate input field on focus
  searchInput.addEventListener('focus', function () {
      searchInput.style.width = '400px';
      searchInput.style.transition = 'width 0.5s ease';
  });

  // Return to normal size when not in focus
  searchInput.addEventListener('blur', function () {
      searchInput.style.width = '350px';
  });

  // Logo hover animation
  const logo = document.querySelector('.logo img');
  logo.addEventListener('mouseover', function() {
      logo.style.transform = 'rotate(360deg)';
      logo.style.transition = 'transform 0.6s ease';
  });
  
  logo.addEventListener('mouseleave', function() {
      logo.style.transform = 'rotate(0deg)';
  });
});
