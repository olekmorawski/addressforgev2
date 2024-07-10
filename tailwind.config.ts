import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                main: 'var(--main)',
                black: 'var(--black)',
                lightblue: 'var(--lightblue)',
                blue: 'var(--blue)',
                darkblue: 'var(--darkblue)',
                light: 'var(--light)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                trade: ['var(--font-trade-winds)', 'cursive'],
            },
        },
    },
    plugins: [],
}
export default config
