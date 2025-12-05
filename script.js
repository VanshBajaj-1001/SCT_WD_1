// Mobile Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Hero Button
document.querySelector(".cta-btn").addEventListener("click", () => {
    alert("Let's plan your dream vacation!");
});

// Package booking buttons
document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Package booked successfully!");
    });
});

// Booking form submit
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your booking request has been submitted! We will contact you shortly.");
});
