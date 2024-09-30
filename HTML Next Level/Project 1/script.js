// Functionality for animated input placeholder
const searchInput = document.querySelector('main input');
const placeholderTexts = [
  "Search for restaurant...",
  "Search for cuisine...",
  "Search for a dish..."
];
let placeholderIndex = 0;

function changePlaceholder() {
  searchInput.setAttribute('placeholder', placeholderTexts[placeholderIndex]);
  placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
}

setInterval(changePlaceholder, 3000);

// Adding smooth scroll for links (optional if the page gets bigger)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fading animation when scrolling
window.addEventListener('scroll', function() {
  const mainSection = document.querySelector('main');
  const scrollPos = window.scrollY;

  if (scrollPos > 50) {
    mainSection.style.opacity = '0.8';
  } else {
    mainSection.style.opacity = '1';
  }
});

// Log in/Sign up modal functionality (you can improve with modals)
const loginModal = document.createElement('div');
loginModal.innerHTML = `
  <div id="loginModal" style="display: none;">
    <div style="background: white; padding: 20px; border-radius: 5px;">
      <h2>Log In</h2>
      <form>
        <input type="text" placeholder="Username" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Log In</button>
      </form>
    </div>
  </div>
`;
document.body.appendChild(loginModal);

const loginButton = document.querySelector('header ul li:nth-child(3) a');
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('loginModal').style.display = 'block';
});

// Close modal on click outside
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});