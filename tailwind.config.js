// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu AU VIC WA NT Guides"', "sans-serif"],
        exo: ['"Exo"', "sans-serif"],
        maven: ['"Maven Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
