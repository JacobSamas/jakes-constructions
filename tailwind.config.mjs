/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#9333EA",
        accent: {
          yellow: "#FACC15",
          green: "#10B981",
          red: "#EF4444",
        },
        background: {
          light: "#F3F4F6",
          dark: "#111827",
        },
      },
    },
  },
  plugins: [],
};
