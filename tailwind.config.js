/** @type {import('tailwindcss').Config} */
const rem = (px) => {
  return px * 0.0625 + 'rem'
}
module.exports = {
  darkMode: ["class"],
  content: ['./src/**/*.{ts,tsx}', './*.html'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["'Inter'", 'sans-serif'],
      roboto: ["'Roboto'", 'sans-serif'],
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
    fontSize: {
      10: rem(10),
      12: rem(12),
      14: rem(14),
      15: rem(15),
      16: rem(16),
      18: rem(18),
      20: rem(20),
      22: rem(22),
      24: rem(24),
      26: rem(26),
      28: rem(28),
      32: rem(32),
      36: rem(36),
      40: rem(40),
      42: rem(42),
      48: rem(48),
    },
    extend: {
      colors: {
        white: {
          DEFAULT: '#FFFFFF',
          100: '#FCFCFD',
        },
        black: {
          DEFAULT: '#000000',
          main: '#191D23',
          100: "#3A4C70"
        },
        gray: {
          100: "#73739E",
          200: "#7182A4",
        },
        yellow: {
          100: "#EAA800",
          100: "#FFBB00",
        },
        red: {
          100: "#DB0019",
          200: "#C62828",
        },
        orange: {
          100: "#FF521D",
        },
        purple: {
          100: "#272688",
          200: "#4746BD",
          300: "#2A01B0",
        },
        blue: {
          100: "#2196F3"
        }

      },
      boxShadow: {
        cardcst: "20px 20px 50px 0px rgba(161, 176, 207, 0.04);",
        header: "0px 40px 80px 0px rgba(0, 21, 37, 0.10)",
        purplebox: "6px 6px 13px rgba(103, 65, 116, 0.5)",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}