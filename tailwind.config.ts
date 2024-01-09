import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#FF90B0",
          secondary: "#FFB6C7",
          accent: "#67DDAB",
          neutral: "#FFFFFF",
          "base-100": "#FFDD94",
          info: "#CCABD8",
          success: "#86E3CE",
          warning: "#FA897B",
          error: "#f34e6b",
          body: {
            "background-color": "#FFFFFF", // Applies to <body>
          }
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
