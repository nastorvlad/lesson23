const path = require('path');
module.exports = {
  entry: [
    './js/calculater.js',
    './js/timer.js',
    './js/main.js',
    './js/posts.js'
  ],
  output: {
    filename: `qwerty.js`,
    path: path.resolve(__dirname, 'dist')
  }
};