var path = require('path');

var paths = {
  css: {
    sassSrc: path.resolve('./css/scss/**/*.scss'),
    watchSrc: path.resolve('./css/scss/**/*.scss'),
    dest: './css',
    tmpDir: path.resolve('./css/css-compiled'),
    mainFile: 'index.css',
    builtFile: 'howto.css'
  }
};

module.exports = paths;
