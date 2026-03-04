/**
 * Small enhancements for the portfolio site.
 * - Mobile navigation toggle.
 * - Smooth scrolling for in-page links.
 * - Lightweight dark mode toggle (CSS is already dark; this keeps a hook).
 */

/**
 * Initializes the navigation toggle for small screens.
 */
function initNavToggle() {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (!navToggle || !navList) {
    return;
  }

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("is-open");
  });

  navList.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (event.target.tagName.toLowerCase() === "a") {
      navList.classList.remove("is-open");
    }
  });
}

/**
 * Enables smooth scrolling for anchor links pointing to sections on the same page.
 */
function initSmoothScroll() {
  const anchorSelector = 'a[href^="#"]';
  const anchors = document.querySelectorAll(anchorSelector);

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = event.currentTarget;

      if (!(target instanceof HTMLAnchorElement)) {
        return;
      }

      const href = target.getAttribute("href");

      if (!href || href === "#" || !href.startsWith("#")) {
        return;
      }

      const section = document.querySelector(href);

      if (!section) {
        return;
      }

      event.preventDefault();

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

/**
 * Simple theme toggle hook.
 * The CSS is already dark-themed; this adds a body class that you can extend later.
 */
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) {
    return;
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("is-light-mode");
  });
}

/**
 * Updates the footer year element with the current year.
 */
function initYear() {
  const yearElement = document.getElementById("year");

  if (!yearElement) {
    return;
  }

  const now = new Date();
  yearElement.textContent = String(now.getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initSmoothScroll();
  initThemeToggle();
  initYear();
});

