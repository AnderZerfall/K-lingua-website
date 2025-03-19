import { header } from "../languages/header.js";
import { footer } from "../languages/footer.js";
import { home } from "../languages/home.js";
import { benefits } from "../languages/benefits.js";
import { contact } from "../languages/contact.js";
import { howWeWork } from "../languages/howWeWork.js";
import { whoAreWe } from "../languages/whoAreWe.js";
import { prices } from "../languages/prices.js";

const langButtons = document.querySelectorAll('.header__lang-text');
const CURRENT_LANG = 'k-lang';

const defineLang = (langButton = null) => {
  let lang = sessionStorage.getItem(CURRENT_LANG) || "en";

  if (langButton) {
    lang = langButton.id;
  }

  currentLang = lang;
  sessionStorage.setItem(CURRENT_LANG, currentLang);

  langButtons.forEach(lan => lan.id === lang ? lan.classList.remove('current') : lan.classList.add('current'));
}

let currentLang = 'en';
defineLang();

const currentPathName = window.location.pathname;
let currentText = { ...header, ...footer };

const checkPageName = () => {
  switch (currentPathName) {
    case "/index.html":
      currentText = { ...currentText, ...home };
      break;
    case "/Benefits.html":
      currentText = { ...currentText, ...benefits };
      break;
    case "/Contact.html":
      currentText = { ...currentText, ...contact };
      break;
    case "/Prices.html":
      currentText = { ...currentText, ...prices };
      break;
    case "/HowWeWork.html":
      currentText = { ...currentText, ...howWeWork };
      break;
    case "/WhoAreWe.html":
      currentText = { ...currentText, ...whoAreWe };
      break;
    default:
      break;
  }
};

checkPageName();

const changeLanguage = () => {
  for (const key in currentText) {
    let elements = document.querySelectorAll(`[data-ln=${key}]`);

    if (elements.length) {
      elements.forEach((elem) => {
        elem.textContent = currentText[key][currentLang];
        }
      );
    }
  }
};

changeLanguage();

langButtons.forEach(lang => {
  lang.addEventListener('click', () => {
    defineLang(lang);
    changeLanguage();
  });
});
