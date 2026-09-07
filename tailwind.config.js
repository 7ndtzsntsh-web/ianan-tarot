module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        celestial: {
          950: "#07060A",
          900: "#0D0B12",
          850: "#13101A",
          800: "#1A1624",
          750: "#221C2F",
          700: "#2B243B",
          600: "#3D3452",
          500: "#5A4E75"
        },
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D4",
          200: "#EEDFA7",
          300: "#E4CB75",
          400: "#D8B548",
          500: "#C89F2A",
          600: "#AD811C",
          700: "#8B6216",
          800: "#6E4B17",
          900: "#5A3D18"
        },
        wine: {
          900: "#280A12",
          800: "#3E0F1D",
          700: "#581529",
          600: "#751C37"
        }
      },
      fontFamily: {
        display: ["Cinzel", "Playfair Display", "serif"],
        heading: ["Cormorant Garamond", "Cinzel", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"]
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(216, 181, 72, 0.25)",
        "gold-glow-lg": "0 0 45px rgba(216, 181, 72, 0.35)",
        "card-dark": "0 20px 40px -15px rgba(0, 0, 0, 0.7)"
      },
      borderRadius: {
        "card": "1.5rem",
        "tarot": "1.75rem"
      }
    }
  },
  plugins: []
};
