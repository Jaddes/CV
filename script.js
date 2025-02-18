const themeToggle = document.getElementById("theme-toggle");
const body = document.body;


if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
}


themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    
    // Čuvanje izbora korisnika
    if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); 
});


