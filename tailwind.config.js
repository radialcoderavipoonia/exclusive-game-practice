/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "100": "100% 100%",
      },
      backgroundImage: {
        "nav-bg": " background: rgba(255, 255, 255, 0.1)",
        blackShadow:
          "radial-gradient(48.51% 51.68% at 50.39% 55.02%, #00000060 0%, #00000050 23%, #00000040 47%, #00000030 72%, #00000020 0%, #00000003 0%)",
      },
      boxShadow: {
        "elegirnos-box-shadow": "#357D6D 4px 4px",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        Swamp: "#00121b",
        "dark-green": "#00141b",
        "Screamin-green": "#7af57a",
        Iron: "#cfd5d5",
        Silver: "#cccccc",
        Gray: "#7f7f7f",
        "gray-dark": "#CCD0D1",
        "Pale-slate": "#d5cfd2",
        "gray-light": "#D3CFD3",
        "transparent-green": "#367E6C",
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        xl: "20px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "72px",
      },
      lineHeight: {
        "120": "120%",
        "130": "130%",
        "160": "160%",
      },
    },
  },
  plugins: [],
};
