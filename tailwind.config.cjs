/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        regular: "rgb(var(--text),<alpha-value>)",
        muted: "rgb(var(--text-muted),<alpha-value>)",
        inverted: "rgb(var(--text-inverted),<alpha-value>)",
        hover: "rgb(var(--text-hover),<alpha-value>)",
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(to top right ,rgb(var(--bg)), rgb(var(--bg-gradiant)))'
      },
      backgroundColor: {
        skin: {
          fill: "rgb(var(--bg),<alpha-value>)",
          gradient: "rgb(var(--bg-gradiant),<alpha-value>)",
          btnFill: "rgb(var(--btn-fill),<alpha-value>)",
          btnAccent: "rgb(var(--btn-accent),<alpha-value>)",
          btnAccentHover: "rgb(var(--btn-accent-hover),<alpha-value>)",
          btnMuted: "rgb(var(--btn-muted),<alpha-value>)",
        },

      },
      animation: {
        'fade-up': 'fade-up 1s ease-out ',
        'expand': 'expand 1s ease-out forwards',
        'progress': 'progress 4s linear forwards'
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(16px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        "expand": {
          "to": {
            width: "100%"
          }
        },
        "progress": {
          "from": {
            strokeDashoffset: "472",
          },
          "to": {
            strokeDashoffset: "0",
          }
        }
      },

      stroke: {
        regular: "rgb(var(--stroke),<alpha-value>)",
      },
      borderColor: {
        regular: "rgb(var(--border),<alpha-value>)",
        fill: "rgb(var(--border-fill),<alpha-value>)",
      }



    },
  },
  plugins: [require('tailwindcss-debug-screens'),
  require("tailwindcss-brand-colors")],
}
