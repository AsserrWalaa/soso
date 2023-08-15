$(document).ready(function () {
  // Select the second tab programmatically
  $(".nav-tabs a:eq(1)").tab("show");
});
const slider = document.querySelector(".card-slider");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
let position = 0;

prevBtn.addEventListener("click", () => {
  const cardWidth = slider.querySelector(".card").offsetWidth;
  const containerWidth = slider.offsetWidth;

  if (position < 0) {
    position += cardWidth + 20;
    slider.style.transform = `translateX(${position}px)`;
  }
});

nextBtn.addEventListener("click", () => {
  const cardWidth = slider.querySelector(".card").offsetWidth;
  const containerWidth = slider.offsetWidth;
  const sliderWidth = slider.scrollWidth;

  if (position > -(sliderWidth - containerWidth)) {
    position -= cardWidth + 20;
    slider.style.transform = `translateX(${position}px)`;
  }
});
