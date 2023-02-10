const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    unstable_flexsearch: true,
    unstable_staticImage: true,
});

module.exports = withNextra({
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/defi-reimagineered/imagine',
                permanent: true,
            },
        ];
    },
});
