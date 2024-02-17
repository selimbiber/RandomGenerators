const PAGE_CONTAINER = document.getElementById("page-container");

function createCardSection(adviceId, adviceText) {
  const CARD_SECTION = document.createElement("main");
  CARD_SECTION.className = "card-section";

  const ADVICE_GENERATOR_CARD_HEADER = document.createElement("header");
  const ADVICE_GENERATOR_CARD_HEADING = document.createElement("h1");
  ADVICE_GENERATOR_CARD_HEADING.className = "advice-generator-card_heading";
  ADVICE_GENERATOR_CARD_HEADING.innerHTML = `ADVICE #${adviceId}`;
  ADVICE_GENERATOR_CARD_HEADER.appendChild(ADVICE_GENERATOR_CARD_HEADING);
  CARD_SECTION.appendChild(ADVICE_GENERATOR_CARD_HEADER);

  const ADVICE_GENERATOR_CARD_TEXT = document.createElement("q");
  ADVICE_GENERATOR_CARD_TEXT.className = "advice-generator-card_text";
  ADVICE_GENERATOR_CARD_TEXT.textContent = adviceText;
  CARD_SECTION.appendChild(ADVICE_GENERATOR_CARD_TEXT);

  const ADVICE_GENERATOR_CARD_FOOTER = document.createElement("footer");
  ADVICE_GENERATOR_CARD_FOOTER.className = "advice-generator-card_footer";

  const ADVICE_GENERATOR_CARD_DIVIDER_FIGURE = document.createElement("figure");
  ADVICE_GENERATOR_CARD_DIVIDER_FIGURE.className = "divider-figure";
  ADVICE_GENERATOR_CARD_FOOTER.appendChild(ADVICE_GENERATOR_CARD_DIVIDER_FIGURE);

  const DIVIDER_FIGURE_MOBILE_IMG = document.createElement("img");
  DIVIDER_FIGURE_MOBILE_IMG.src = "./images/pattern-divider-mobile.svg";
  DIVIDER_FIGURE_MOBILE_IMG.className = "divider-figure_mobile-img";
  ADVICE_GENERATOR_CARD_DIVIDER_FIGURE.appendChild(DIVIDER_FIGURE_MOBILE_IMG);

  const DIVIDER_FIGURE_DESKTOP_IMG = document.createElement("img");
  DIVIDER_FIGURE_DESKTOP_IMG.src = "./images/pattern-divider-desktop.svg";
  DIVIDER_FIGURE_DESKTOP_IMG.className = "divider-figure_desktop-img";
  ADVICE_GENERATOR_CARD_DIVIDER_FIGURE.appendChild(DIVIDER_FIGURE_DESKTOP_IMG);

  const ADVICE_GENERATOR_CARD_BTN = document.createElement("button");
  ADVICE_GENERATOR_CARD_BTN.className = "advice-generator-btn";
  ADVICE_GENERATOR_CARD_BTN.title = "Click for generate a new advice";
  ADVICE_GENERATOR_CARD_BTN.addEventListener("click", () => changeCurrentAdvice());

  const ADVICE_GENERATOR_CARD_BTN_DICE_ICON = document.createElement("img");
  ADVICE_GENERATOR_CARD_BTN_DICE_ICON.src = "./images/icon-dice.svg";
  ADVICE_GENERATOR_CARD_BTN_DICE_ICON.className = "btn-dice-icon";
  ADVICE_GENERATOR_CARD_BTN_DICE_ICON.alt = "";
  ADVICE_GENERATOR_CARD_BTN.appendChild(ADVICE_GENERATOR_CARD_BTN_DICE_ICON);

  ADVICE_GENERATOR_CARD_FOOTER.appendChild(ADVICE_GENERATOR_CARD_BTN);
  CARD_SECTION.appendChild(ADVICE_GENERATOR_CARD_FOOTER);

  return PAGE_CONTAINER.insertBefore(CARD_SECTION, PAGE_CONTAINER.lastChild);
}

async function loadCardItemsToCardSection() {
  const DATA_FETCH = await fetch("https://api.adviceslip.com/advice");
  const ADVICE_DATA = await DATA_FETCH.json();

  return createCardSection(ADVICE_DATA.slip.id, ADVICE_DATA.slip.advice);
}

loadCardItemsToCardSection();

async function changeCurrentAdvice() {
  const DATA_FETCH = await fetch("https://api.adviceslip.com/advice");
  const ADVICE_DATA = await DATA_FETCH.json();

  document.querySelector(
    ".advice-generator-card_heading"
  ).innerHTML = `ADVICE #${ADVICE_DATA.slip.id}`;
  document.querySelector(".advice-generator-card_text").textContent =
    ADVICE_DATA.slip.advice;
}
changeCurrentAdvice();
function createFooterSection() {
  const FOOTER_SECTION = document.createElement("footer");
  FOOTER_SECTION.className = "footer-section";

  const FRONTEND_MENTOR_LINK = document.createElement("a");
  FRONTEND_MENTOR_LINK.textContent = "Frontend Mentor";
  FRONTEND_MENTOR_LINK.href =
    "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub";
  FRONTEND_MENTOR_LINK.ariaLabel = "Visit the website of this challenge.";
  FRONTEND_MENTOR_LINK.target = "_blank";
  FOOTER_SECTION.appendChild(FRONTEND_MENTOR_LINK);

  const GITHUB_REPO_LINK = document.createElement("a");
  GITHUB_REPO_LINK.href =
    "https://github.com/selimbiber/RandomGenerators/blob/main/RandomAdviceGenerator";
  GITHUB_REPO_LINK.ariaLabel = "Visit code source repo of this project.";
  GITHUB_REPO_LINK.target = "_blank";
  FOOTER_SECTION.appendChild(GITHUB_REPO_LINK);

  const GITHUB_LOGO_ICON = document.createElement("i");
  GITHUB_LOGO_ICON.classList.add("fa-brands", "fa-github");
  GITHUB_LOGO_ICON.ariaHidden = "true";
  GITHUB_REPO_LINK.appendChild(GITHUB_LOGO_ICON);

  const GITHUB_PROFILE_LINK = document.createElement("a");
  GITHUB_PROFILE_LINK.textContent = "Selim Biber";
  GITHUB_PROFILE_LINK.href = "https://www.github.com/selimbiber/";
  GITHUB_PROFILE_LINK.ariaLabel = "Visit my GitHub profile.";
  GITHUB_PROFILE_LINK.target = "_blank";
  FOOTER_SECTION.appendChild(GITHUB_PROFILE_LINK);

  return PAGE_CONTAINER.appendChild(FOOTER_SECTION);
}

setTimeout(createFooterSection, 1000);
