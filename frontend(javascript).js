const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.querySelector(".slider");
const products = document.querySelectorAll(".product");
let currentSlide = 0;

prevBtn.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

function goToSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = products.length - 1;
  } else if (slideIndex >= products.length) {
    slideIndex = 0;
  }

  slider.style.transform = 'translateX(-$(slideIndex * 100)%)';
  currentSlide = slideIndex;
}