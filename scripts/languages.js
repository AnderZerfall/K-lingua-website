import { header } from "../languages/header.js";
import { footer } from "../languages/footer.js";
import { home } from "../languages/home.js";
import { benefits } from "../languages/benefits.js";
import { contact } from "../languages/contact.js";
import { howWeWork } from "../languages/howWeWork.js";
import { whoAreWe } from "../languages/whoAreWe.js";
import { prices } from "../languages/prices.js";

window.onload = () => {
  setTimeout(() => {
    const langButtons = document.querySelectorAll(".header__lang-text");
    const CURRENT_LANG = "k-lang";

    const defineLang = (langButton = null) => {
      let lang = sessionStorage.getItem(CURRENT_LANG) || "en";

      if (langButton) {
        lang = langButton.id;
      }

      currentLang = lang;
      sessionStorage.setItem(CURRENT_LANG, currentLang);

      langButtons.forEach((lan) =>
        lan.id === lang
          ? lan.classList.remove("current")
          : lan.classList.add("current")
      );
    };

    let currentLang = "en";
    defineLang();

    const currentPathName = window.location.pathname.replace(/^\/[^/]+\//, "/");
    let currentText = { ...header, ...footer };

    const checkPageName = () => {
      if (currentPathName === "/index.html" || currentPathName === "/") {
        currentText = { ...currentText, ...home };
      } else if (
        currentPathName === "/Benefits.html" ||
        currentPathName === "benefits"
      ) {
        currentText = { ...currentText, ...benefits };
      } else if (
        currentPathName === "/Contact.html" ||
        currentPathName === "contact"
      ) {
        currentText = { ...currentText, ...contact };
      } else if (
        currentPathName === "/Prices.html" ||
        currentPathName === "prices"
      ) {
        currentText = { ...currentText, ...prices };
      } else if (
        currentPathName === "/HowWeWork.html" ||
        currentPathName === "how-we-work"
      ) {
        currentText = { ...currentText, ...howWeWork };
      } else if (
        currentPathName === "/WhoAreWe.html" ||
        currentPathName === "who-are-we"
      ) {
        currentText = { ...currentText, ...whoAreWe };
      } else {
        currentText = { ...currentText, ...home };
      }
    };

    checkPageName();

    const changeLanguage = () => {
      for (const key in currentText) {
        let elements = document.querySelectorAll(`[data-ln=${key}]`);

        if (elements.length) {
          elements.forEach((elem) => {
            elem.textContent = currentText[key][currentLang];
          });
        }
      }
    };

    changeLanguage();

    langButtons.forEach((lang) => {
      lang.addEventListener("click", () => {
        defineLang(lang);
        changeLanguage();
      });
    });
  }, 100);
};
