/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

const colors = require("vuetify/lib/util/colors");

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
        customVariables: ['~/assets/colors.scss'],
        theme: {
            light: true,
            themes: {
                light: {
                    primary: colors.amber.lighten1,
                    secondary: colors.orange.lighten1,
                    accent: colors.amber.accent1,
                    error: colors.red.lighten1,
                    warning: colors.yellow.lighten1,
                    info: "#03a9f4",
                    success: "#4caf50"
                }
            },
        }
    }
};