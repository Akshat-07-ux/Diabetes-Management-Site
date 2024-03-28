document.addEventListener("DOMContentLoaded", function() {
    const particlesContainer = document.querySelector('.particles-container');

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);

        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;

        const animationDuration = Math.random() * 2 + 1;
        particle.style.animation = `moveParticle ${animationDuration}s linear infinite`;

        particle.addEventListener('animationiteration', () => {
            particle.style.top = `${Math.random() * window.innerHeight}px`;
            particle.style.left = `${Math.random() * window.innerWidth}px`;
        });
    }

    for (let i = 0; i < 30; i++) {
        createParticle();
    }
});


