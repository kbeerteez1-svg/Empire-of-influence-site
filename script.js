// Smooth scroll helpers
function scrollToTarget(id) {
  const el = document.querySelector(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll-to");
    if (target && target.startsWith("#")) scrollToTarget(target);
  });
});

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("[data-mobile-link]").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}

// FAQ accordion
const accordionHeaders = document.querySelectorAll(".accordion__header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector(".accordion__icon");
    if (!body) return;

    const isOpen = body.classList.contains("open");

    // close all others
    document
      .querySelectorAll(".accordion__body.open")
      .forEach((b) => b.classList.remove("open"));
    document.querySelectorAll(".accordion__icon").forEach((i) => {
      i.textContent = "+";
    });

    if (!isOpen) {
      body.classList.add("open");
      if (icon) icon.textContent = "−";
    }
  });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

