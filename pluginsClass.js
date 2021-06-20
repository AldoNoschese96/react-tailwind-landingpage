const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      ".bg-img-with-opacity": {
        background: `linear-gradient(180deg, rgba(79,70,229,0.6587009803921569) 0%, rgba(79,70,229,0.6727065826330532) 100%), url("/src/assets/hero.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "1rem",
      },
    });
  };
});
