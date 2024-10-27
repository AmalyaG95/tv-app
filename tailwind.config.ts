import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        white: "#f1f1f1",
        grey: "#858688",
        black: "#040404",
        blacker: "#0c0c0c",
        "slate-blue": "#3b486d",
      },
      fontFamily: {
        tajawal: ["var(--tajawal)"],
      },
      boxShadow: {
        main: "1px 1px 33px 0 rgba(59,107,240,0.9)",
      },
      backgroundImage: {
        "cover-gradient":
          "linear-gradient(269.72deg, rgba(0,0,0,0) -1166.37%, rgba(0,0,0,0.6) -1244.39%)",
        "menu-gradient":
          "linear-gradient(90deg, #040404 0%, #040404FA 21%, #04040400 100%)",
        "btn-gradient":
          "linear-gradient(159.08deg, #001671 140.46%, #2727f5 -26.13%)",
      },
    },
  },
  plugins: [],
};
export default config;
