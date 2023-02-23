// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/finix-ai',
        head: {
            title: 'Finix AI',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/finix-ai/favicon.ico' }]
        }
    },
    srcDir: 'src/application',
    css: ['~/assets/styles/index.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
