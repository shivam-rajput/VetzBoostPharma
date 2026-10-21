/* ==========================================================================
   Vetz Boost Pharma — Site JavaScript (vanilla, no dependencies)
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navMain = document.querySelector(".nav-main");

  if (navToggle && navMain) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMain.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navMain.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMain.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 420) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Footer year ---------- */
  var yearEls = document.querySelectorAll("[data-current-year]");
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    });
  }

  /* ---------- Contact form validation (client-side only, no backend) ---------- */
  var contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var fields = contactForm.querySelectorAll("[data-required]");

      fields.forEach(function (field) {
        var group = field.closest(".form-group");
        var value = field.value.trim();
        var isEmail = field.type === "email";
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        var fieldValid = value.length > 0 && (!isEmail || emailPattern.test(value));

        if (group) {
          group.classList.toggle("has-error", !fieldValid);
        }
        if (!fieldValid) {
          valid = false;
        }
      });

      var successBox = contactForm.querySelector(".form-success");

      if (valid) {
        if (successBox) {
          successBox.classList.add("show");
          successBox.textContent =
            "Thank you! Your enquiry has been received. Our export team will get back to you shortly.";
        }
        contactForm.reset();
      } else if (successBox) {
        successBox.classList.remove("show");
      }
    });
  }

  /* ---------- Active nav link based on current page ---------- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-main a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
})();
