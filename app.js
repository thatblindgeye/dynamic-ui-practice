const nav = document.getElementById("upper-nav");
const vis = document.querySelector(".upper-links-visible");



// window.addEventListener("resize", () => {
//   if (vis.offsetWidth >= nav.offsetWidth - 150) {
//     const length = document.querySelector(".upper-links-visible").children.length;
//     document.querySelector("#more-container .dropdown-links").appendChild(document.querySelector(".upper-links-visible").children[length - 1]);
//   } else if (vis.offsetWidth < nav.offsetWidth - 150) {
//     const length = document.querySelector("#more-container .dropdown-links").children.length;
//     document.querySelector(".upper-links-visible").appendChild(document.querySelector("#more-container .dropdown-links").children[length - 1]);
//   }
// })

const navBar = (() => {
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  const dropdownLists = document.querySelectorAll(".dropdown-links");

  function checkAriaExpanded() {
    Array.from(dropdownLists).forEach(item => {
      if (item.classList.contains("visible")) {
        item.previousElementSibling.setAttribute("aria-expanded", "true");
      } else {
        item.previousElementSibling.setAttribute("aria-expanded", "false");
      }
    });
  };

  function hideDropdownLinks(e) {
    Array.from(dropdownLists).forEach(item => {
      if (item !== e.target.nextElementSibling && 
          !e.target.parentElement.parentElement.classList.contains("dropdown-links")) {
        item.classList.remove("visible");
      };
    });
    checkAriaExpanded();
  };

  function toggleDropdownLinks(e) {
    const dropdownList = e.target.nextElementSibling;
    dropdownList.classList.toggle("visible");
    checkAriaExpanded();
  };
  
  Array.from(dropdownButtons).forEach(item => {
    item.addEventListener("click", (e) => {
      hideDropdownLinks(e);
      toggleDropdownLinks(e);
    });
  });

  Array.from(dropdownButtons).forEach(item => {
    item.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        hideDropdownLinks(e);
        toggleDropdownLinks(e);
      };
    });
  });
  
  window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("dropdown-button")) {
      Array.from(dropdownLists).forEach(item => {
        item.classList.remove("visible")
      });
    };
    checkAriaExpanded();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      Array.from(dropdownLists).forEach(item => {
        item.classList.remove("visible")
      });
    };
    checkAriaExpanded();
  });
})();
