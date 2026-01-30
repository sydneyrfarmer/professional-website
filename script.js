(function () {
  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", navLinks.classList.contains("is-open"));
    });
  }

  // Close mobile menu when a link is clicked (smooth scroll still works via anchor)
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
