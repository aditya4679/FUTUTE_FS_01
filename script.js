const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.textContent = "Thank you! Your message has been sent.";
    message.style.color = "green";
    form.reset();
});
