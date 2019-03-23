const mix = require('laravel-mix');

mix.js('src/js/script.js', 'dist/js')
   .sass('src/scss/bundle.scss', 'dist/css')
   .options({
      processCssUrls: false,
      autoprefixer: {
         options: {
            browsers: [
               'last 20 versions', // Set really far back in hopes of generating old prefixes
               'ie 10-11' // Getting specific
            ]
         }
      }
   });