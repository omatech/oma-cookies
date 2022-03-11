const mix = require('laravel-mix');

mix.copy('src/scss', 'dist/scss');
mix.copy('src/fonts', 'dist/fonts');

mix.sass('src/scss/omacookies.scss', 'css/omacookies.css');
mix.js('src/js/main.js', 'dist/js/omacookies.js');
mix.minify('dist/js/omacookies.js', "", true);
mix.setResourceRoot('..');
mix.setPublicPath('dist');

mix.babelConfig({
    comments: false,
    compact: true,
    minified: true,
});

mix.options({
    terser: {
        terserOptions: {
            compress: true,
            mangle: true,
            output: {
                comments: false,
            },
        },
    }
});
