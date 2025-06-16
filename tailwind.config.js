export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          DEFAULT: "#222",
          light: "#666",
        },
        accent: {
          DEFAULT: "#d01345",
        },
      },
    },
  },
  plugins: [],
};
