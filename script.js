const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'flex' : 'none';
    });
}

document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
})

document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1 ) % slides.length;
    showSlide(currentIndex);
})

showSlide(currentIndex);