//change header color on scroll
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.style.backgroundColor = "rgb(34, 34, 34)";
      header.style.opacity = "0.95";
    } else {
      header.style.backgroundColor = "rgb(26,30,31)";
      header.style.opacity = "1";
    }
  });
});


if (window.innerWidth < 768) {
  let prevScrollPos = window.scrollY ;
  window.onscroll = function() {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("main-header").style.top = "0";
        document.getElementById("burger-menu").style.top="27px"
    } else {
        document.getElementById("main-header").style.top = "-100px"; 
        document.getElementById("burger-menu").style.top="-100px";
    }
    prevScrollPos = currentScrollPos;
}
}

//burger bar
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("burger-navbar");
const headeroverlay = document.querySelector(".header-overlay");
burger.addEventListener("click", function () {
  nav.classList.toggle("d-block");
  burger.classList.toggle("active");
  burger.classList.toggle("color");
  headeroverlay.classList.toggle('d-block')
});

headeroverlay.addEventListener('click',function(){
  nav.classList.remove("d-block");
  headeroverlay.classList.remove('d-block')
  burger.classList.remove("active");
  burger.classList.remove("color");
})


//slider

const slider = document.querySelector(".slider");
const prevButton = document.querySelectorAll(".prev");
const nextButton = document.querySelectorAll(".next");
const slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let slideIndex = 0;

// mobile rezoluciaze
const slideImage = () => {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
};

//desktop rezoluciaze
function showSlidesDesktop() {
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "flex" : "none";
  });
}
function handleResize() {
  if (window.innerWidth < 1024) {
    slideImage();
    slides.forEach((slide, i) => {
      slide.style.display = "flex";
    });
  } else {
    showSlidesDesktop();
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(0px)`;
    });
  }
}

//ukan
function prevSlide() {
  showSlidesDesktop();
  slideIndex--;
}

//win
function nextSlide() {
  showSlidesDesktop();
  slideIndex++;
}

handleResize();
window.addEventListener("resize", handleResize);
prevButton.forEach((button) => {
  button.addEventListener("click", prevSlide);
});
nextButton.forEach((button) => {
  button.addEventListener("click", nextSlide);
});

setInterval(() => {
  setSlideTimer();
}, 2000);

function setSlideTimer() {
  if (window.innerWidth < 1024) {
    if (slideIndex >= slides.length) {
      slideIndex = 0;
      slideImage();
    } else {
      slideImage();
      slideIndex++;
    }
  } else {
    showSlidesDesktop();
    slideIndex++;
  }
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    slideIndex = index;
    if (window.innerWidth < 1024) {
      slideImage();
    } else {
      showSlidesDesktop();
    }
  });
});

//accordion
const accordion = document.querySelectorAll(".accordeon-wraper");
const upArrow = document.querySelectorAll(".arrow-up");
const downArrow = document.querySelectorAll(".arrow-down");

function handleAccordion() {
  accordion.forEach((accordion, i) => {
    accordion.addEventListener("click", function () {
      accordion.classList.toggle("open");
      const isOpen = accordion.classList.contains("open");
      accordion.style.height = isOpen ? "auto" : "85px";
    });
  });
}
handleAccordion();

//footer

const rules = document.querySelector(".rules");
const button = document.querySelector(".button");
const xbutton = document.querySelector(".close-button");
const wraper = document.querySelector(".footer-rules-wraper");
const overlay = document.querySelector(".footer-overlay");

rules.addEventListener("click", function () {
  wraper.style.transition = "transform 0.2s ease-in-out";
  wraper.style.transform = "translateX(0px)";
  overlay.style.display = "block";
});

button.addEventListener("click", function () {
  wraper.style.transition = "transform 0.5s ease-in-out";
  wraper.style.transform = "translateX(100%)";
  overlay.style.display = "none";
});

xbutton.addEventListener("click", function () {
  wraper.style.transition = "transform 0.5s ease-in-out";
  wraper.style.transform = "translateX(100%)";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
  wraper.style.transition = "transform 0.5s ease-in-out";
  wraper.style.transform = "translateX(100%)";
  overlay.style.display = "none";
});
