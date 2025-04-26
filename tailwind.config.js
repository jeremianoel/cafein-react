/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#EE8542",
				secondary: "#4F4844",
			},
		},
	},
	plugins: [],
};
