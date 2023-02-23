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
				light: '#ffffff',
				darkGold: 'rgb(221, 15, 1)',
				gold: 'rgb(240, 132, 2)'
			}
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		}
	},
	plugins: [],
}
