/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      "off-white": "#fefefe",
      black: "#2d2925",
      "light-grey": "#f2f2f2",
      "dark-grey": "#767771",
      green: "#00a50a",
      "light-green": "#d6fdc6",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      gridTemplateColumns: {
        "main-layout": "15% auto 25%",
        "lg-layout": "auto auto auto",
        "md-layout": "5rem auto",
        "sm-layout": "auto",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
