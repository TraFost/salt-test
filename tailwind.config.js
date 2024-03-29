/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			color: {
				primary: "#7879F1",
				secondary: "#3E334E",
			},
		},
	},
	plugins: [],
};
