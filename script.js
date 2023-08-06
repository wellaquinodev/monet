const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000);

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
