document.addEventListener("DOMContentLoaded", function() {
    const particlesContainer = document.querySelector('.particles-container');
    let isAnimationRunning = false;
    const fanIcon = document.getElementById("fan-button");

    function toggleAnimation() {
        isAnimationRunning = !isAnimationRunning;
        if (isAnimationRunning) {
            particlesContainer.classList.add("active");
            fanIcon.classList.add("rotate");
            particlesContainer.style.display = 'none'; 
        } else {
            particlesContainer.classList.remove("active");
            fanIcon.classList.remove("rotate");
            particlesContainer.style.display = 'block'; 
        }
        animationActive = !animationActive;
    }

    fanIcon.addEventListener("click", toggleAnimation);


});

$(document).ready(function() {
    $('#rotateIcon').click(function() {
        $(this).toggleClass('rotate');
    });
});
