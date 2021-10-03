module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					blue: '#1F2148',
					green: '#13AAA1',
					dark: '#19191B',
					gray: '#F4F8FD',
					grey: '#8A94A6',
				},
			},
			height: {
				banner: '627px',
				'banner-2': '90%',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				circular: ['Circular Std', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/custom-forms')],
};
