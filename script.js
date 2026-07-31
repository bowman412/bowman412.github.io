// ==========================
// Engineered Legacy
// Main JavaScript
// ==========================


// Mobile navigation menu

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}



// Close mobile menu after selecting a link

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("active");

        }

    });

});




// Simple scroll reveal animation

const sections = document.querySelectorAll(
    ".section, .card, .service-card, .cta"
);


const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);



sections.forEach(section => {

    section.classList.add("hidden-section");

    observer.observe(section);

});
