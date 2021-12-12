module.exports = {
chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
    .use('babel-loader')
    .loader('babel-loader')
    .end()
    .use('vue-svg-loader')
    .loader('vue-svg-loader');
    },

    // pwa: {
    //     name: 'DidDnd',
    //     themeColor: '#FF7D7D',
    //     msTileColor: '#000000',
    //     appleMobileWebAppCapable: 'yes',
    //     appleMobileWebAppStatusBarStyle: 'default',

    //     // configure the workbox plugin
    //     // workboxPluginMode: 'InjectManifest',
    //     // workboxOptions: {
    //     //   // swSrc is required in InjectManifest mode.
    //     //   swrSc: 'src/register.service.worker.js',
    //     //   // ...other Workbox options...
    //     // }
    // },

};