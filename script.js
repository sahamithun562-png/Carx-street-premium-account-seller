// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu")
            .classList.remove("active");

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".reveal, .service-card, .social-card, .contact-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(3, 4, 12, .92)";

    } else {

        navbar.style.background =
            "rgba(5, 6, 17, .72)";

    }

});


// ===============================
// CURRENT YEAR
// ===============================

console.log(
    "🥀 CarX Street Premium ID Seller website loaded."
);