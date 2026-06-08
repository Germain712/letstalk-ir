/* ---------------------------------------------------
   MOBILE MENU TOGGLE
--------------------------------------------------- */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

/* ---------------------------------------------------
   AUTO YEAR UPDATE
--------------------------------------------------- */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------
   DESKTOP CAROUSEL (Services Page)
--------------------------------------------------- */
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (track && prevBtn && nextBtn) {
  let position = 0;
  const cardWidth = 320; // width of each service card + gap

  nextBtn.addEventListener("click", () => {
    position -= cardWidth;
    if (Math.abs(position) >= track.scrollWidth - cardWidth) {
      position = 0; // loop back to start
    }
    track.style.transform = `translateX(${position}px)`;
  });

  prevBtn.addEventListener("click", () => {
    position += cardWidth;
    if (position > 0) {
      position = -(track.scrollWidth - cardWidth);
    }
    track.style.transform = `translateX(${position}px)`;
  });
}

/* ---------------------------------------------------
   SMOOTH SCROLL (Optional Enhancement)
--------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
