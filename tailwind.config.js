module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {},
        screens: {
            xs: '500px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        container: {
            center: true,
            padding: '0.75rem'
        },
        fontFamily: {
            poppins: 'Poppins',
            dana: 'Dana'
        }
    },
    plugins: [],
}