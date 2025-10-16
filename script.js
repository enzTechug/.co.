document.addEventListener("DOMContentLoaded", function() {

    // Mobile Navigation (Hamburger Menu)
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((el) => observer.observe(el));
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- NEW: Core Values Section Background Slider ---
    const bgSlider = document.getElementById('values-bg-slider');
    if (bgSlider) {
        const images = [
            // IMPORTANT: Replace these with your own high-quality image URLs
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSYoaZs_pzGetYQmzOadWsQtZnfLIRftZPde2GuUbfg&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqBocz0TiQ6pK7aNlhkdbU9ZsBBm2x9tZpu3Xyd2hLw&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11kyZ7l63NPvQU5PhfWOlashPmj3aSgxIvKKxsGYqXA&s=10',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR6OXTLn3S29yaV5BMqbMupoDIW0yY-iaPEeBNCKFsQ&s=10'
        ];
        
        let currentIndex = 0;

        function changeBackground() {
            // Preload the next image to ensure smooth transition
            const nextIndex = (currentIndex + 1) % images.length;
            const img = new Image();
            img.src = images[nextIndex];
            
            // Wait for the next image to load before changing the background
            img.onload = () => {
                bgSlider.style.backgroundImage = `url('${images[currentIndex]}')`;
                currentIndex = nextIndex;
            };
        }

        // Initial background set
        changeBackground();

        // Change background every 5 seconds (5000 milliseconds)
        setInterval(changeBackground, 5000);
    }
});