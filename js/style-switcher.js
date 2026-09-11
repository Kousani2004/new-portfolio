// Toggle style switcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});


// Hide style switcher on scroll

window.addEventListener("scroll", () => {

    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }

});


// Theme colours

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {

    alternateStyles.forEach(style => {

        if (color === style.getAttribute("title")) {

            style.removeAttribute("disabled");

        } else {

            style.setAttribute("disabled", "true");

        }

    });

}


// Theme light and dark

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");

    } else {

        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");

    }

});


// Check dark mode on page load

window.addEventListener("load", () => {

    if (document.body.classList.contains("dark")) {

        dayNight.querySelector("i").classList.add("fa-sun");

    } else {

        dayNight.querySelector("i").classList.add("fa-moon");

    }

});