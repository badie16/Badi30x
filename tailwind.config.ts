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
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#4F46E5", // Indigo 600
                    foreground: "#FFFFFF",
                },
                card: {
                    DEFAULT: "var(--card-bg, rgba(255, 255, 255, 0.05))",
                    foreground: "var(--card-fg, #FFFFFF)",
                },
                muted: {
                    DEFAULT: "var(--muted-bg, rgba(255, 255, 255, 0.1))",
                    foreground: "var(--muted-fg, #A1A1AA)", // Zinc 400
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
