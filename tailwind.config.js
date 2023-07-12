/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#f5fbff",
          "200": "#f0f3fa",
          "300": "#ebf0fa",
        },
        dodgerblue: "#1f87fe",
        royalblue: "#6385ff",
        gray: "#101214",
        slategray: "#73808d",
        black: "#000",
        darkgray: "#a5acba",
        whitesmoke: "#eaebf0",
        darkslategray: "#2d3142",
        seagreen: "#219653",
        gainsboro: "rgba(217, 217, 217, 0)",
        steelblue: "#4c5980",
        "base-white": "#fff",
        "gray-50": "#5f6d7e",
        "gray-700": "#272d37",
      },
      fontFamily: {
        rubik: "Rubik",
        arial: "Arial",
        "text-l-regular": "Inter",
        lato: "Lato",
        inika: "Inika",
        "noto-sans": "'Noto Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      "5xl": "24px",
      "4xs": "9px",
      "2xs": "11px",
      "6xs": "7px",
      base: "16px",
      mini: "15px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
