/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./servicios/**/*.html",
    "./zonas/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary":                    "#c2ceea",
        "primary-fixed":              "#d8e2f8",
        "primary-fixed-dim":          "#c2ceea",
        "primary-container":          "#1d2f46",
        "on-primary":                 "#1d2f46",
        "on-primary-fixed":           "#0e1d30",
        "on-primary-fixed-variant":   "#3c4860",
        "on-primary-container":       "#8fa0bf",
        "inverse-primary":            "#4e5a72",
        "surface-tint":               "#c2ceea",

        "secondary":                  "#b2ccea",
        "secondary-fixed":            "#cce1ff",
        "secondary-fixed-dim":        "#b2ccea",
        "secondary-container":        "#2c4260",
        "on-secondary":               "#142d46",
        "on-secondary-fixed":         "#001630",
        "on-secondary-fixed-variant": "#2c4260",
        "on-secondary-container":     "#a0bcd8",

        "tertiary":                   "#e9c176",
        "tertiary-fixed":             "#ffdea5",
        "tertiary-fixed-dim":         "#e9c176",
        "tertiary-container":         "#342300",
        "on-tertiary":                "#412d00",
        "on-tertiary-container":      "#ab8844",
        "on-tertiary-fixed":          "#261900",
        "on-tertiary-fixed-variant":  "#5d4201",

        "background":                 "#0f172a",
        "surface":                    "#0f172a",
        "surface-dim":                "#0b1424",
        "surface-bright":             "#374f66",
        "surface-variant":            "#2a3f58",
        "surface-container-lowest":   "#0b1424",
        "surface-container-low":      "#162236",
        "surface-container":          "#1d2f46",
        "surface-container-high":     "#243753",
        "surface-container-highest":  "#2c4260",

        "on-surface":                 "#dde8f8",
        "on-surface-variant":         "#8aaec8",
        "on-background":              "#dde8f8",
        "inverse-surface":            "#dde8f8",
        "inverse-on-surface":         "#1d2f46",

        "outline":                    "#4a6880",
        "outline-variant":            "#2a3f58",

        "error":                      "#ffb4ab",
        "error-container":            "#93000a",
        "on-error":                   "#690005",
        "on-error-container":         "#ffdad6",
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Inter"],
        body:     ["Inter"],
        label:    ["Inter"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
