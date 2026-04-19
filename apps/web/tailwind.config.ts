import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#07090d',
        graphite: '#171b24',
        ivory: '#f4f5f7',
        accent: '#6ca8ff'
      }
    }
  },
  plugins: []
};

export default config;
