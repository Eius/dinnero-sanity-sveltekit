/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '3rem',
        xl: '4rem',
        'xxl': '5rem',
      },
    },
    colors: {
      "white": "#f3f3f3",
      "black": "#202020",
      "gray": "#6a6a6a",
      "facebook": "#1778F2",
      "primary": "#2e2e30",
      "secondary": "#212121",
      "transparent": "rgba(0, 0, 0, 0)",
      "accent":
      {
        "red": "#da2c20",
        "red-dark": "#c93f25",
        "green": "#6ba86d"
      }
    },
    screens: {
      "xs": "400px",
      "sm": "596px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "xxl": "1400px",
    },
    fontFamily: {
      "sans": ["Port Lligat Slab", "ui-sans-serif", "system-ui", "-apple-system"],
      "title": ["Yanone Kaffeesatz", "ui-sans-serif", "system-ui", "-apple-system"],
      "funny": ["Pacifico", "ui-sans-serif", "system-ui", "-apple-system"],
    },
    backgroundSize: {
      'cover': 'cover',
      'contain': 'contain',
      'auto': 'auto',
    },
    extend: {
      backgroundImage: {
        'subtle-pattern': "url('/tactile_noise.webp')",
        'pattern': "url('/pattern.jpg')",
        'wood-dark': "url('/wood-dark.jpg')"
      }
    },
  },
  plugins: [],
}