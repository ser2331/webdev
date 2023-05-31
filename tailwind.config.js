/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'sm': '320px',
            // => @media (min-width: 320px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                roboto: ['"Roboto"', 'sans-serif'],
                arimo: ['"Arimo"', 'sans-serif']
            },
            colors: {
                'regal-green': '#9CC634',
                'regal-blue': '#072446',
                'regal-border': '#CCCCCC',
                'regal-input-text': '#0D2444',
                'regal-button-bg': '#A6C34F',
                'regal-footer-bg': '#020D1A',
            },
            backgroundImage: {
                'hero-pattern': "url('/src/accets/images/city21.png')",
                'service': "url('/src/accets/images/Illustration-2.png')",
                'about': "url('/src/accets/images/Illustration-4.png')",
            },
            boxShadow: {
                'card': '0px 0px 4px rgba(0, 0, 0, 0.25);',
                'profit-card': '0px 4px 4px #E5E5E5;',
            },
            borderRadius: {
                'left': '10px 0 0 10px',
                'middle': '10px',
                'right': '0 10px 10px 0',
            },
            listStyleImage: {
                'checkmark': 'url("/src/accets/images/check.svg")',
            },
        }
    },
    plugins: [],
}

