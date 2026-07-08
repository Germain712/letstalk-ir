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
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      mainNav.setAttribute("aria-hidden", String(!isOpen));
      document.body.classList.toggle("no-scroll");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        mainNav.setAttribute("aria-hidden", "true");
        document.body.classList.remove("no-scroll");
      });
    });
  }

  // ---------------------------------------------------
  // LANGUAGE TOGGLE (HEADER + FLOATING BUTTON)
  // ---------------------------------------------------
  const langBtn = document.querySelector(".lang-btn");
  const floatingLangBtn = document.querySelector(".floating-lang-btn");

  function toggleLanguage() {
    const isFa = document.body.classList.toggle("fa-mode");
    localStorage.setItem("langMode", isFa ? "fa" : "en");

    [langBtn, floatingLangBtn].forEach((button) => {
      if (button) {
        button.setAttribute("aria-pressed", String(isFa));
      }
    });
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
  document.querySelectorAll(".year").forEach((yearSpan) => {
    yearSpan.textContent = new Date().getFullYear();
  });

  // ---------------------------------------------------
  // CONTACT FORM VALIDATION
  // ---------------------------------------------------
  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      const form = event.currentTarget;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        event.preventDefault();
        alert("Please fill out all required fields.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        return;
      }

      if (contactSuccess) {
        contactSuccess.style.display = "block";
      }
    });
  }

  // ---------------------------------------------------
  // BOOKING FORM VALIDATION + STRIPE CHECKOUT
  // ---------------------------------------------------
  const bookingForm = document.getElementById("bookingForm");
  const bookingSuccess = document.getElementById("bookingSuccess");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      const form = event.currentTarget;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const date = form["preferred-date"].value.trim();
      const time = form["preferred-time"].value.trim();

      if (!name || !email || !date || !time) {
        event.preventDefault();
        alert("Please fill out all required fields.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        return;
      }

      if (bookingSuccess) {
        bookingSuccess.style.display = "block";
      }
    });
  }

  document.querySelectorAll(".checkout-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const amount = button.dataset.amount || "4000";
      const bookingType = button.dataset.bookingType || "session";

      try {
        const response = await fetch("/.netlify/functions/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, bookingType }),
        });

        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          alert("Stripe checkout could not be started. Please try again.");
        }
      } catch (error) {
        alert("Stripe checkout could not be started. Please try again.");
      }
    });
  });
});
