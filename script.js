// ---------------------------------------------------
// DEFERRED INITIALISATION
// ---------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  // ---------------------------------------------------
  // MOBILE MENU
  // ---------------------------------------------------
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      document.body.classList.toggle("no-scroll");
    });
  }

  // ---------------------------------------------------
  // LANGUAGE TOGGLE (HEADER + FLOATING BUTTON)
  // ---------------------------------------------------
  const langBtn = document.querySelector(".lang-btn");
  const floatingLangBtn = document.querySelector(".floating-lang-btn");

  function toggleLanguage() {
    document.body.classList.toggle("fa-mode");
    localStorage.setItem(
      "langMode",
      document.body.classList.contains("fa-mode") ? "fa" : "en",
    );
  }

  if (langBtn) langBtn.addEventListener("click", toggleLanguage);
  if (floatingLangBtn)
    floatingLangBtn.addEventListener("click", toggleLanguage);

  // Load saved language mode
  const savedLang = localStorage.getItem("langMode");
  if (savedLang === "fa") {
    document.body.classList.add("fa-mode");
  }

  // ---------------------------------------------------
  // COOKIE BANNER
  // ---------------------------------------------------
  if (!localStorage.getItem("cookieAccepted")) {
    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
      <p>This website uses cookies to enhance your experience.</p>
      <button id="acceptCookies">Accept</button>
    `;
    document.body.appendChild(banner);

    document.getElementById("acceptCookies").addEventListener("click", () => {
      localStorage.setItem("cookieAccepted", "true");
      banner.remove();
    });
  }

  // ---------------------------------------------------
  // SERVICE CAROUSEL (DESKTOP)
  // ---------------------------------------------------
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (track && prevBtn && nextBtn) {
    let index = 0;

    nextBtn.addEventListener("click", () => {
      index = Math.min(index + 1, track.children.length - 1);
      track.style.transform = `translateX(-${index * 320}px)`;
    });

    prevBtn.addEventListener("click", () => {
      index = Math.max(index - 1, 0);
      track.style.transform = `translateX(-${index * 320}px)`;
    });
  }

  // ---------------------------------------------------
  // AUTO YEAR IN FOOTER
  // ---------------------------------------------------
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
