
const themeButton = document.querySelector(".theme-toggle");

function updateThemeIcon() {
    const isLightMode = document.body.classList.contains("light-mode");

    themeButton.innerHTML = isLightMode
        ? '<i data-lucide="moon"></i>'
        : '<i data-lucide="sun"></i>';

    themeButton.setAttribute(
        "aria-label",
        isLightMode ? "Switch to dark mode" : "Switch to light mode"
    );

    lucide.createIcons();
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

updateThemeIcon();

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");

    localStorage.setItem("theme", isLightMode ? "light" : "dark");

    updateThemeIcon();
});
