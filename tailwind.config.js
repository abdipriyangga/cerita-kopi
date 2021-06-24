/* eslint-disable no-undef */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "39": "9.5rem",
        "65": "17rem",
        "81": "21rem",
        "82": "22rem",
        "83": "23rem",
      },
    },
    backgroundImage: {
      "bg-banner": "url('/src/assets/images/banner.png')"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
