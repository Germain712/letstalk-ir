/* ---------------------------------------------------
   MOBILE MENU TOGGLE
--------------------------------------------------- */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });
}

/* Close menu when clicking a link */
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    document.body.classList.remove("no-scroll");
  });
});

/* ---------------------------------------------------
   AUTO YEAR UPDATE
--------------------------------------------------- */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------
   LANGUAGE TOGGLE (HEADER + FLOATING BUTTON)
--------------------------------------------------- */
const langButtons = document.querySelectorAll(".lang-btn, .floating-lang-btn");

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("fa-mode");

    const isFarsi = document.body.classList.contains("fa-mode");
    localStorage.setItem("lang", isFarsi ? "fa" : "en");
  });
});

/* Load saved language preference */
const savedLang = localStorage.getItem("lang");
if (savedLang === "fa") {
  document.body.classList.add("fa-mode");
}

/* ---------------------------------------------------
   COOKIE BANNER (GDPR)
--------------------------------------------------- */
(function () {
  const consentKey = "cookieConsent";
  const hasConsent = localStorage.getItem(consentKey);

  if (!hasConsent) {
    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
      <p>
        <span class="lang-en">This site uses cookies to improve your experience. By continuing, you accept cookies.</span>
        <span class="lang-fa">این وب‌سایت از کوکی‌ها برای بهبود تجربه شما استفاده می‌کند. با ادامه استفاده، شما با استفاده از کوکی‌ها موافقت می‌کنید.</span>
      </p>
      <button id="cookieAccept">
        <span class="lang-en">Accept</span>
        <span class="lang-fa">قبول</span>
      </button>
    `;
    document.body.appendChild(banner);

    const acceptBtn = document.getElementById("cookieAccept");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", () => {
        localStorage.setItem(consentKey, "true");
        banner.remove();
      });
    }
  }
})();

/* ---------------------------------------------------
   DESKTOP CAROUSEL (Services Page)
--------------------------------------------------- */
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (track && prevBtn && nextBtn) {
  let index = 0;

  const getCards = () => track.querySelectorAll(".service-card");

  const updateCarousel = () => {
    const cards = getCards();
    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth + 16; // width + gap
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  };

  prevBtn.addEventListener("click", () => {
    const cards = getCards();
    if (!cards.length) return;

    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    const cards = getCards();
    if (!cards.length) return;

    index = (index + 1) % cards.length;
    updateCarousel();
  });

  updateCarousel();
}

/* ---------------------------------------------------
   SMOOTH SCROLL FOR INTERNAL LINKS
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
