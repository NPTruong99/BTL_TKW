const changeLanguageBtn = document.querySelector(".header__nav-language");
const changeLanguage = document.querySelector(".change-language");

function showChangeLanguage() {
    changeLanguage.classList.toggle("show");
}

changeLanguageBtn.addEventListener("click", showChangeLanguage);
