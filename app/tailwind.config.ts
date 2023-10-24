import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "light-red": "hsl(0, 100%, 67%)",
        "orange yellow": "hsl(39, 100%, 56%)",
        "Green teal": "hsl(166, 100%, 37%)",
        "Cobalt blue": "hsl(234, 85%, 45%)",
      },
    },
  },
  plugins: [],
};
export default config;
