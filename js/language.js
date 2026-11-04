const languageButtons = document.querySelectorAll(".language-button");

const savedLanguage = localStorage.getItem("language") || "en";

for (const button of languageButtons) {
    if (button.dataset.lang === savedLanguage) {
        button.classList.add("active");
    }
}

for (const button of languageButtons) {
    button.addEventListener("click", function() {
        for (const otherButton of languageButtons) {
            otherButton.classList.remove("active");
        }

        button.classList.add("active");

        localStorage.setItem("language", button.dataset.lang);
    });
}