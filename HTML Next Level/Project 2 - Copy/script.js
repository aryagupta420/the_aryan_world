document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true // Animation happens only once
    });

    // Button Hover Animation
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = "scale(1)";
        });
    });

    // Scroll-based interaction (Change navbar background color)
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Change navbar background on scroll
        if (scrollY > header.offsetHeight) {
            navbar.style.backgroundColor = '#333'; // Dark background
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent background
        }
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href'); // Get target section ID
            const targetElement = document.querySelector(targetId); // Select target element

            // Smoothly scroll to the target element
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    });
});
