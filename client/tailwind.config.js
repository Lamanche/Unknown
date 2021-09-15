module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fade: "fadeIn .3s ease-in",
      },
    },
    keyframes: (theme) => ({
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
