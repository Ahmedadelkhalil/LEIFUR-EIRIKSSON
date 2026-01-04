/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#7b7b5b",
        overlay: "rgba(87,87,66,.4)",
        boxes: "#7d7e5d",
        white: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      header: ["Cinzel Decorative"],
      paragraph: ["Josefin Sans"],
    },
  },
  plugins: [],
};
