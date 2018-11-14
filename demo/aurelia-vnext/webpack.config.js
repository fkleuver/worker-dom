module.exports = function() {
  return {
    mode: 'development',
    entry: './src/startup.ts',
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.ts'],
      modules: ['src', 'node_modules']
    },
    module: {
      rules: [
        { test: /\.ts$/i, loader: 'ts-loader' },
        { test: /\.html$/i, loader: 'html-loader' }
      ]
    }
  }
}
