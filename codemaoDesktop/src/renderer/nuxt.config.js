/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
    ssr: false,
    target: 'static',
    head: {
        title: '编程猫桌面',
        meta: [{ charset: "utf-8" }]
    },
    loading: false,
    plugins: [
        { ssr: true, src: '@/plugins/icons.js' },
        '~/plugins/axios.js'

    ],
    axios: {
        proxy: {
            "/api": {
                target: "https://api.codemao.cn",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        },
        retry: false,
    },
    buildModules: [

    ],
    modules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/axios',
    ],
    vuetify: {
        theme: {
            themes: {
                light: {
                    primary: "#ffc107",
                    secondary: "#ff9800",
                    accent: "#ffeb3b",
                    error: "#f44336",
                    warning: "#cddc39",
                    info: "#03a9f4",
                    success: "#4caf50"
                },
                dark: {
                    primary: "#ffc107",
                    secondary: "#ff9800",
                    accent: "#ffeb3b",
                    error: "#f44336",
                    warning: "#cddc39",
                    info: "#03a9f4",
                    success: "#4caf50"
                }
            },
        }
    }
};