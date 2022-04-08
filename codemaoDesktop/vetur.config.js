module.exports = {
    // Notice: It only affects the settings used by Vetur.
    settings: {
        "vetur.useWorkspaceDependencies": true,
        "vetur.experimental.templateInterpolationService": true
    },
    // **optional** default: `[{ root: './' }]`
    // support monorepos
    projects: [
        './packages/repo2', // Shorthand for specifying only the project root location
        {
            // **required**
            // Where is your project?
            // It is relative to `vetur.config.js`.
            root: './packages/repo1',
            // **optional** default: `'./.vscode/vetur/snippets'`
            // Where is vetur custom snippets folders?
            snippetFolder: './node_modules/vuetify/dist',
            // **optional** default: `[]`
            // Register globally Vue component glob.
            // If you set it, you can get completion by that components.
            // It is relative to root property.
            // Notice: It won't actually do it. You need to use `require.context` or `Vue.component`
            globalComponents: [
                './src/renderer/components/**/*.vue'
            ]
        }
    ]
}