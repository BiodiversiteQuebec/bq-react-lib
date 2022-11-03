const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const images = require('rollup-plugin-image-files');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );

    config.plugins = [
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];

    return config;
  },
};
