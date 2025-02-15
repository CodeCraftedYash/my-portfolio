import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
            wiggle:{
              "0%": { transform: "skewX(9deg) scaleY(1.1)" },
          "10%": { transform: "skewX(-8deg) scaleY(1.05)" },
          "20%": { transform: "skewX(7deg) scaleY(1.1)" },
          "30%": { transform: "skewX(-6deg) scaleY(1.05)" },
          "40%": { transform: "skewX(5deg) scaleY(1.1)" },
          "50%": { transform: "skewX(-4deg) scaleY(1.05)" },
          "60%": { transform: "skewX(3deg) scaleY(1.1)" },
          "70%": { transform: "skewX(-2deg) scaleY(1.05)" },
          "80%": { transform: "skewX(1deg) scaleY(1.1)" },
          "90%": { transform: "skewX(0deg) scaleY(1)" },
          "100%": { transform: "skewX(0deg) scaleY(1)" },
            }
      },
      animation:{
          "wiggle-animation":"wiggle 4s ease-out infinite alternate "
      }
    },
  },
  plugins: [],
} satisfies Config;
 