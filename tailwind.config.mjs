/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        inria: ["Inria Serif", "serif"],
      },
      colors: {
        white: "#FFFFFF",
        green: "#008575",
        orange: "#CA8528",
        black: "#000000",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
