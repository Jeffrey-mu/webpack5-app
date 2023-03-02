class RemoveCommentsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('RemoveCommentsPlugin', (compilation) => {
      for (const fileName in compilation.assets) {

        if (fileName.endsWith('.js')) {
          const contents = compilation.assets[fileName].source();
          const noComments = contents.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
          console.log(noComments)
          compilation.assets[fileName] = {
            source: () => noComments,
            size: () => noComments.length,
          };
        }
      }
    });
  }
}
module.exports = RemoveCommentsPlugin;
