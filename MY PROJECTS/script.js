// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
    
    // Additional animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) rotate(3deg)';
        card.style.transition = 'transform 0.5s ease-out';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotate(0)';
        card.style.transition = 'transform 0.5s ease-out';
      });
    });
  });
  
  // Project card hover effects with additional animations
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', function() {
      this.classList.add('active');
    });
  
    card.addEventListener('mouseout', function() {
      this.classList.remove('active');
    });
  });
  