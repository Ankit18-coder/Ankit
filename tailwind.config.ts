/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFB6C1',
        'light-pink': '#FFC0CB',
        'pale-pink': '#FFE4E1',
        'lavender': '#E6D5F5',
        'soft-lavender': '#F0E8FF',
        'peach': '#FFDAB9',
        'light-peach': '#FFECD5',
        'soft-white': '#FFFBF7',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #FFB6C1 0%, #E6D5F5 50%, #FFDAB9 100%)',
        'gradient-sunset': 'linear-gradient(180deg, #FFE4E1 0%, #E6D5F5 50%, #FFECD5 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #FFFBF7 0%, #F0E8FF 25%, #FFE4E1 50%, #FFECD5 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 182, 193, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 182, 193, 0.8)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropFilter: {
        'glass': 'blur(10px) brightness(1.1)',
      },
      boxShadow: {
        'glow-pink': '0 0 30px 0 rgba(255, 182, 193, 0.5)',
        'glow-lavender': '0 0 30px 0 rgba(230, 213, 245, 0.5)',
        'glow-peach': '0 0 30px 0 rgba(255, 218, 185, 0.5)',
      },
    },
  },
  plugins: [],
};
