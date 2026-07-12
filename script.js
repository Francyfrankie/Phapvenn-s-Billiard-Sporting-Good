let currentSlideIndex = 0; 

function changeSlide(direction) {
    let slides = document.querySelectorAll('.slide');

    slides[currentSlideIndex].style.display = "none";
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    slides[currentSlideIndex].style.display = "block";
}

setInterval(function() {
    changeSlide(1);
}, 4000);