module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('./assets/hero.jpg')",
        "sectionOne-pattern": "url('./assets/sectionOne.jpg')",
        "sectionTwo-pattern": "url('./assets/sectionTwo.jpg')",
        "sectionFour-pattern": "url('./assets/sectionFour.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("./pluginsClass")],
};
