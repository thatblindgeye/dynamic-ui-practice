"use strict";

import "./styles.css";
import { upperNavLinks } from "./navbar";
import { imageSlider } from "./image-slider";

const themeOptions = (() => {
  const themeToggle = document.querySelector(".theme-toggle");
  const githubLogo = document.querySelector(".github-logo");

  const changeTheme = () => {
    if (document.documentElement.getAttribute("theme") === "dark") {
      document.documentElement.setAttribute("theme", "light");
      githubLogo.setAttribute("src", "assets/GitHub-Mark-32px.png");
    } else {
      document.documentElement.setAttribute("theme", "dark");
      githubLogo.setAttribute("src", "assets/GitHub-Mark-Light-32px.png");
    };
  };

  changeTheme();
  themeToggle.addEventListener("click", changeTheme);
  themeToggle.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      changeTheme();
    };
  });
})();