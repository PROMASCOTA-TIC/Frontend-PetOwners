import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					'40': '#00404099',
					DEFAULT: '#004040'
				},
				secondary: {
					'40': '#00AA2866',
					DEFAULT: '#00AA28'
				},
				terciary: {
					'20': '#46DA6933',
					DEFAULT: '#46DA69'
				},
				quarternary: {
					'40': '#00282866',
					DEFAULT: '#002828'
				},
				quintenary: {
					'50': '#00606080',
					DEFAULT: '#006060'
				},
				black10: '#0000001A',
				aux1: '#F87D6B',
				aux2: '#FCB9C2',
			},
			spacing: {
				e5: '5px',
				e8: '8px',
				e13: '13px',
				e21: '21px',
				e34: '34px',
				e55: '55px',
				e63: '63px',
				e144: '144px'
			},
			borderRadius: {
				b10: '10px',
				b15: '15px',
				b20: '20px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				'fs36': '36px',
				'fs24': '24px',
				'fs18': '18px',
				'fs14': '14px',
				'fs12': '12px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
