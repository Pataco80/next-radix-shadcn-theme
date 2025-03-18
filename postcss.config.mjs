import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import animate from 'tailwindcss-animate'

const config = {
	plugins: {
		tailwindcss,
		autoprefixer,
		'tailwindcss-animate': animate,
	},
}

export default config
