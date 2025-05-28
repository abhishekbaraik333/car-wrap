const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  // centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView:1,
  spaceBetween: 20,
});

// Get overlay elements
const overlay = document.getElementById("fullscreen-overlay");
const fullscreenImg = document.getElementById("fullscreen-img");
const closeBtn = document.getElementById("close-btn");

// Add click event to each image in swiper
document.querySelectorAll(".swiper-slide img").forEach((img) => {
  img.addEventListener("click", () => {
    fullscreenImg.src = img.src;
    overlay.style.display = "flex";
  });
});

// Close the fullscreen
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  fullscreenImg.src = "";
});

// Optional: close overlay on outside click
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
    fullscreenImg.src = "";
  }
});
