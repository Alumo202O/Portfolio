// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact Form (Demo only)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    form.reset();
  }, 1500);
});
