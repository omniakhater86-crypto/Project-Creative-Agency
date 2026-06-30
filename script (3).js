 // =========================
// Contact Form
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Your message has been sent successfully!");

    form.reset();

});


// =========================
// Smooth Scroll
// =========================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// =========================
// Hero Button Effect
// =========================

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", function () {

    button.style.transform = "scale(1.05)";

});

button.addEventListener("mouseleave", function () {

    button.style.transform = "scale(1)";

});


// =========================
// Card Hover Animation
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";

    });

});


// =========================
// Project Card Animation
// =========================

const projects = document.querySelectorAll(".project-card");

projects.forEach(project => {

    project.addEventListener("mouseenter", function () {

        project.style.transform = "translateY(-10px)";

    });

    project.addEventListener("mouseleave", function () {

        project.style.transform = "translateY(0)";

    });

});

