module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        fontFamily: {
            'Ogg-Italic': ['Ogg-Italic'],
            'Ogg-Roman': ['Ogg-Roman'],
            'Gilroy-Light': ['Gilroy-Light'],
            'Gilroy-ExtraBold': ['Gilroy-ExtraBold'],
        },
        colors: {
        "portfolio-primary": "#1b1b1b",
        "portfolio-secondary": "#F2DFB8",
        },
        screens: {
            'xs': {'min': '400px', 'max': '767px'}
        },
        animation: {
            blob: "blob 7s infinite",
            rotatecircle: 'rotatecircle 12s linear infinite'
        },
        keyframes: {
            blob: {
                "0%": {
                    transform: "translate(0px, 0px) scale(1)",
                },
                "33%": {
                    transform: "translate(30px, -50px) scale(1.1)",
                },
                "66%": {
                    transform: "translate(-20px, 20px) scale(0.9)",
                },
                "100%": {
                    transform: "translate(0px, 0px) scale(1)",
                },
            },
            rotatecircle: {
                "0%": {
                    transform: "rotate(0deg)",
                },
                "100%": {
                    transform: "rotate(360deg)",
                }
            }
        }
    },
  },
  plugins: [],
}
