/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        roxo1: "#6D67D0",
        textLight: "#E7E6FB",
        iconLight: "#DAD8F7",
        greenLight: "#87EBCD",
        headerColor: "#C2BFF4",
      },
      backgroundImage: {
        bgMain: "url('/bg.png')",
        bgTemp: "url(/bgTemp.png)",
      },
      keyframes: {
        nuvemKey: {
          "0%": { transform: "translate(-30%, -40%)" },
          "50%": { transform: "translate(-20%, -45%)" },
          "100%": { transform: "translate(-30%, -40%)" },
        },
        fade: {
          to: {
            scale: 1,
            opacity: 1,
          },
        },
      },

      animation: {
        nuvemAnimation: "nuvemKey 10s infinite linear",
        fadeIn: "fade 0.6s forwards",
      },
      fontFamily: {
        sans: "Lato, sans-serif",
      },
    },
  },
  plugins: [],
};
