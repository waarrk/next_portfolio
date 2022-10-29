/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-222222": "#222222",
        "base-white": "#FBFBFB",
        "base-beige": "#F7F7F2",
      },
      boxShadow: {
        neumorphismlight: "8px 8px 16px #7a7a7a, -8px -8px 16px #b8b8b8;",
        neumorphismdark: "6px 6px 12px #080808, -6px -6px 12px #1a1a1a;",
      },
    },
  },
  plugins: [],
};
