document.addEventListener("DOMContentLoaded", function () {
    // === Navbar scroll effect ===
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // === Scroll animations for sections ===
    const animateSections = () => {
        const sections = document.querySelectorAll(".section-animate");
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.75;

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
            }
        });
    };

    // Run on load and scroll
    animateSections();
    window.addEventListener("scroll", animateSections);
});

const nav = document.getElementById("main-nav");
const collapsed = document.getElementById("navbarNav");

// When navbar is expanded
collapsed.addEventListener("shown.bs.collapse", () => {
    nav.classList.add("navbar-dark-bg");
    nav.classList.remove("navbar-transparent");
});

collapsed.addEventListener("hidden.bs.collapse", () => {
    nav.classList.add("navbar-transparent");
    nav.classList.remove("navbar-dark-bg");
});
