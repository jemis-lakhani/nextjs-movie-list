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
        primary: "#2BD17E", // Replace with your primary color
        error: "#EB5757", // Replace with your error color
        bgColor: "#093545",
        inputColor: "#224957",
        cardColor: "#092C39",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "2xl": "4rem", // Example custom font size for h1
        xl: "3rem", // Example custom font size for h2
        lg: "2rem", // Example custom font size for h3
        md: "1.5rem", // Example custom font size for h4
        base: "1.25rem", // Example custom font size for h5 and default heading size
        sm: "1rem", // Example custom font size for h6
        "body-sm": "0.9rem",
        "body-xs": "0.8rem",
      },
      lineHeight: {
        "2xl": "5rem", // Example custom line height for h1
        xl: "3.5rem", // Example custom line height for h2
        lg: "2.5rem", // Example custom line height for h3
        md: "2rem", // Example custom line height for h4
        base: "1.5rem", // Example custom line height for h5 and default heading line height
        sm: "1rem", // Example custom line height for h6
      },
      // letterSpacing: {
      //   tight: "-0.02em", // Example custom letter spacing for tight
      //   normal: "0", // Example custom letter spacing for normal
      //   wide: "0.1em", // Example custom letter spacing for wide
      // },
    },
  },
  plugins: [],
};
export default config;
