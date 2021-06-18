module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        mainBlue: "#1C2842",
      },
    },
=======
        BlueCamp: "#1C2842",
      },
    },
    screen: {
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" },
    },
>>>>>>> develop
  },
  variants: {
    extend: {
      translate: ["active", "focus"],
    },
  },
  plugins: [],
};
