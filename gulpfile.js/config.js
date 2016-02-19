'use strict';

var dest = './build/',
  src = './src/',
  libs = './node_modules';

module.exports = {
  dest: dest,
  libs: libs,
  styleguide: {
    collections: {
      components: {
        pattern: "components/*.md"
      },
      modules: {
        pattern: "modules/*.md"
      }
    },
    path: {
      root: './',
      src: {
        pages: src + 'docs',
        layouts: src + 'styleguide/templates/',
        components: src + 'styleguide/components/',
        helpers: src + 'styleguide/',
        styles: src + 'styleguide/styles/',
        watch: [src + 'docs/**/*', src + 'styleguide/**/*'],
      },
      dest: {
        pages: dest + 'docs',
        libs: dest + 'docs/libs',
        layouts: dest + 'docs/styleguide/layouts',
        components: dest + 'docs/styleguide/components',
        styles: dest + 'docs/styleguide/styles'
      }
    }
  }
};
