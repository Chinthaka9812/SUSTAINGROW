const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("mainMenu");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
const submitBtn = document.getElementById("submitBtn");
const skeleton = document.getElementById("insightsSkeleton");
const insights = document.getElementById("insightsContent");
const emptyState = document.getElementById("insightsEmpty");

function validateField(field) {
  const value = field.value.trim();
  let valid = true;

  if (!value) {
    valid = false;
  } else if (field.type === "email") {
    valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  field.setAttribute("aria-invalid", String(!valid));
  return valid;
}

function setFeedback(type, message) {
  if (!formFeedback) return;
  formFeedback.classList.remove("is-error", "is-success");
  if (type === "error") formFeedback.classList.add("is-error");
  if (type === "success") formFeedback.classList.add("is-success");
  formFeedback.textContent = message;
}

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll('.menu a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (form && submitBtn) {
  const fields = Array.from(form.querySelectorAll("input, textarea"));

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setFeedback("", "");

    const valid = fields.every((field) => validateField(field));
    if (!valid) {
      setFeedback("error", "Please provide valid information in all required fields.");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      form.reset();
      fields.forEach((field) => field.setAttribute("aria-invalid", "false"));
      setFeedback("success", "Request sent successfully. We will contact you within 24 hours.");
    } catch (_error) {
      setFeedback("error", "Unable to send right now. Please email info@sustaingrowsl.com directly.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Request";
    }
  });
}

window.setTimeout(() => {
  if (!skeleton || !insights || !emptyState) return;
  skeleton.classList.add("hidden");
  const hasInsights = true;
  if (hasInsights) {
    insights.classList.remove("hidden");
  } else {
    emptyState.classList.remove("hidden");
  }
}, 900);
