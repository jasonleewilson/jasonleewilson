import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(205, 34, 41)',
        // primary: '#c5fb45',	
        secondary: '#ecc94b',
      }
    },
    
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
