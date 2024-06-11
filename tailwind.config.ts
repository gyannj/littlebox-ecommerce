import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark:{
          1: '#161925',
          2: '#1c1f2e',
          3: '#252a41',
        },
        // homeBackground: '#161925',
        textColor: '#ffffff',
        priceDropColor: '#06ff2e',
        strikeThroughPriceColor: '#626262',
        goldColor: '#ffb300',
        // navbarBackground: '#1c1f2e',
        // searchBoxBackground: '#252a41',
        searchBoxColor: '#9294a0',
      },
    },
  },
  plugins: [],
};
export default config;
