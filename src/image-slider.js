"use strict";

const imageSlider = (() => {
  const images = [
    {
      url: "assets/images/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",
      alt: "A mostly white cat sleeping beneath bed covers.",
      "credit link": "https://unsplash.com/@kstonematheson",
      "credit name": "Kate Stone Matheson"
    },
    {
      url: "assets/images/daria-shatova-46TvM-BVrRI-unsplash.jpg",
      alt: "A small cat laying upside down, staring into the camera with their paws stretched out.",
      "credit link": "https://unsplash.com/@dariasha911",
      "credit name": "Daria Shatova"
    },
    {
      url: "assets/images/jae-park-7GX5aICb5i4-unsplash.jpg",
      alt: "A white and tan cat looking into the camera with their mouth open mid-meow.",
      "credit link": "https://unsplash.com/@jaehunpark",
      "credit name": "Jae Park"
    },
    {
      url: "assets/images/justin-sinclair-0ptOFauN7n8-unsplash.jpg",
      alt: "Two calico cats, one walking towards the camera and the other sitting and staring at a wall.",
      "credit link": "https://unsplash.com/@justinsinclair",
      "credit name": "Justin Sinclair"
    },
    {
      url: "assets/images/marko-blazevic-zBvVuRJ71vU-unsplash.jpg",
      alt: "A gray cat standing on their hind legs, with their front paws bent in front of them.",
      "credit link": "https://unsplash.com/@kerber",
      "credit name": "Marko Blažević"
    },
  ];

  images.forEach(image => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.setAttribute("tabindex", "0");
    document.querySelector(".slider-dots").appendChild(dot);
  })


})();

export { imageSlider }