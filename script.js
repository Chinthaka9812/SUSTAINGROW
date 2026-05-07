document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href.length <= 1) return;

    const section = document.querySelector(href);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
