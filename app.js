"use strict";

const upperNavLinks = (() => {
  const convertRemToPixels = (rem) => {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  };

  const moreButton = document.querySelector(".more-links-button");
  const moreContainer = document.querySelector(".more-container");
  const moreLinksList = document.querySelector(".more-links");
  const toggleMoreVisibility = () => {
    if (moreLinksList.children.length === 0) {
      moreContainer.style.display = "none";
      moreButton.setAttribute("aria-expanded", "false");
      moreLinksList.classList.remove("visible");
    } else {
      moreContainer.style.display = "block";
    }
  };

  const moveLinks = () => {
    const navbar = document.getElementById("upper-nav");
    const navWidth = navbar.offsetWidth;
    const stopWidth = moreContainer.offsetWidth + convertRemToPixels(10);
    const visibleContainer = document.querySelector(".primary-links");
    const visibleLinks = document.querySelectorAll(".primary-links > li:not(.more-container)");
    const visibleLength = visibleLinks.length;
    const visibleWidth = visibleContainer.offsetWidth;

    if (visibleWidth >= navWidth - stopWidth && visibleLength) {
      if (!moreLinksList.children.length) {
        moreLinksList.appendChild(visibleLinks[visibleLength - 1]);
      } else {
        // add to More list in original nav order
        moreLinksList.insertBefore(visibleLinks[visibleLength - 1], moreLinksList.children[0]);
      };
      // rerun function until visibleWidth is < navWidth + stopWidth
      moveLinks();
    } else {
      if (!moreLinksList.children.length) return;
      visibleContainer.insertBefore(moreLinksList.children[0], moreContainer);
    };
  };

  moveLinks();
  toggleMoreVisibility();
  window.addEventListener("resize", () => {
    moveLinks();
    toggleMoreVisibility();
  });


  const dropdownButtons = document.getElementsByClassName("dropdown-button");
  const dropdownLists = document.getElementsByClassName("dropdown-links");

  const checkAriaExpanded = () => {
    Array.from(dropdownLists).forEach((item) => {
      if (item.classList.contains("visible")) {
        item.previousElementSibling.setAttribute("aria-expanded", "true");
        item.previousElementSibling.children[0].textContent = "expand_less";
      } else {
        item.previousElementSibling.setAttribute("aria-expanded", "false");
        item.previousElementSibling.children[0].textContent = "expand_more";
      }
    });
  };

  const hideDropdownLinks = (e) => {
    Array.from(dropdownLists).forEach((item) => {
      if (item !== e.target.nextElementSibling &&
          !e.target.parentElement.parentElement.classList.contains(
          "dropdown-links")
      ) {
        item.classList.remove("visible");
      }
    });
    checkAriaExpanded();
  };

  const toggleDropdownLinks = (e) => {
    const dropdownList = e.target.nextElementSibling;
    dropdownList.classList.toggle("visible");
    checkAriaExpanded();
  };

  Array.from(dropdownButtons).forEach((item) => {
    item.addEventListener("click", (e) => {
      hideDropdownLinks(e);
      toggleDropdownLinks(e);
    });
  });

  Array.from(dropdownButtons).forEach((item) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        hideDropdownLinks(e);
        toggleDropdownLinks(e);
      }
    });
  });

  window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("dropdown-button")) {
      Array.from(dropdownLists).forEach((item) => {
        item.classList.remove("visible");
      });
    }
    checkAriaExpanded();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      Array.from(dropdownLists).forEach((item) => {
        item.classList.remove("visible");
      });
    }
    checkAriaExpanded();
  });
})();

const imageSlider = (() => {
  const images = [
    {
      url: "assets/restaurant-background2.jpg",
      alt: "An image of a coffee shop interior, with several people sitting at tables."
    },
    // {
    //   url: "",
    //   alt: ""
    // },
    // {
    //   url: "",
    //   alt: ""
    // }
  ]

  const currentImage = document.querySelector(".current-image");
  currentImage.setAttribute("src", images[0].url);
  currentImage.setAttribute("alt", images[0].alt);

  images.forEach(image => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.setAttribute("tabindex", "0");
    document.querySelector(".slider-dots").appendChild(dot);
  })

})();

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