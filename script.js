import { applicantData } from "./main.js";
const Header = document.querySelector(".header");
const navContent = document.querySelector("nav");

const form = document.querySelector("form"),
  nameDisplay = document.querySelector(".name"),
  ageDisplay = document.querySelector(".age"),
  nicknameDisplay = document.querySelector(".nickname"),
  quoteDisplay = document.querySelector(".quote"),
  outputDisplay = document.querySelector(".output-data");

(function loadAllEventlistners() {
  form.addEventListener("submit", applicantData);

  navContent.addEventListener("mouseenter", () => {
    Header.classList.add("active");
  });

  navContent.addEventListener("mouseleave", () => {
    Header.classList.remove("active");
  });
})();

export {
  form,
  nameDisplay,
  ageDisplay,
  nicknameDisplay,
  quoteDisplay,
  outputDisplay,
};
