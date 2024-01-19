import type { Config } from "tailwindcss";

// colors
import colors from "tailwindcss/colors";
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

const addVariablesForColors = ({
  addBase,
  theme,
}: {
  addBase: (base: any) => void;
  theme: (path: string) => any;
}) => {
  let allColors = flattenColorPalette(theme("colors"));

  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.fuchsia,
        tertiary: {
          ...colors.stone,
          950: "#141210",
          1000: "#0C0A09",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/container-queries"),
    addVariablesForColors,
  ],
};
export default config;
