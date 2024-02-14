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
        "99": "99% 100%",
      },
      backgroundImage: {
        "nav-bg": " background: rgba(255, 255, 255, 0.1)",
        blackShadow:
          "radial-gradient(48.51% 51.68% at 50.39% 55.02%, #00000060 0%, #00000050 23%, #00000040 47%, #00000030 72%, #00000020 0%, #00000003 0%)",
        nuestrasOfertasBg:
          "linear-gradient(306.99deg, rgba(81, 200, 239, 0.04) -13.72%, rgba(122, 245, 122, 0.04) 102.02%)",
      },
      boxShadow: {
        "elegirnos-box-shadow": "#357D6D 4px 4px",
        "back-to-top": "white 0px 0px 15px 2px",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-green": "#00141b",
        "Screamin-green": "#7af57a",
        Iron: "#cfd5d5",
        Silver: "#cccccc",
        Gray: "#7f7f7f",
        "gray-dark": "#CCD0D1",
        "transparent-green": "#367E6C",
        "gable-green": "#153d36",
        "limed-pruce": "#334349",
        "oslo-gray": "#80898D",
        "cod-gray": "#191919",
        "iron-secondary": "#CCCFD1",
        "firefly":"#092423",
        "oslo-gray-second":"#839090",
        "blue-charcoal":"#02181e",
        "bermuda":"#6AE3A9",
      },
      fontSize: {
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
