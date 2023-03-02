const path = require('path');
const RemoveCommentsPlugin = require('./plugin/RemoveCommentsPlugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new RemoveCommentsPlugin(),
  //   // ...
  // ],
};
