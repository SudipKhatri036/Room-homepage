"use strict";
const menuOpen = document.querySelector(".ham-open");
const menuClose = document.querySelector(".ham-close");
const navBar = document.querySelector(".nav-bar");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//-------------------------  Checlong width to change Img Src  --------------------------
let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
if (width <= 486) {
  document.querySelectorAll(".img-cont img").forEach((img, i) => {
    console.log(img);
    img.setAttribute("src", `/images/mobile-image-hero-${i + 1}.jpg`);
  });
}
//-------------------------  Checlong width to change Img Src  --------------------------

//-------------------------  Open And Close Menu  --------------------------
menuOpen.addEventListener("click", function () {
  navBar.style.display = "block";
  menuClose.style.visibility = "visible";
  menuOpen.style.visibility = "hidden";
});

menuClose.addEventListener("click", function () {
  navBar.style.display = "none";
  menuOpen.style.visibility = "visible";
  menuClose.style.visibility = "hidden";
});
//-------------------------  Open And Close Menu  --------------------------

//-------------------------  SLider Function  --------------------------
let currentSlide = 0;
const maxSlide = slides.length;

function goToSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}

goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  console.log("fired Next");

  goToSlide(currentSlide);
};
const prevSlide = function () {
  if (currentSlide == 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};
//------------------------- SLider Function  --------------------------

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
document.querySelector(".anim").addEventListener("mouseover", function () {
  document.querySelector(".anim").style.animationPlayState = "paused";
});

document.querySelector(".anim").addEventListener("mouseout", function () {
  document.querySelector(".attribution>p").style.animationPlayState = "running";
});
