/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/application/**/*.{vue,js,jsx,tsx}'],
	darkMode: 'Media',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1280px',
			xl: '1420px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				dark: '#030415',
				darker: '#000111',
				light: '#FFFFFF',
				darkGold: '#DD0F01',
				gold: '#F08402',
				gray: 'rgb(134, 134, 134)'
			}
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		}
	},
	plugins: [],
}
