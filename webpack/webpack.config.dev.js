import webpack from 'webpack'
import path from 'path'

const port = process.env.WEBPACK_PORT || 9000
const publicPath = `http://localhost:${port}/dist/`

const outputFile = 'app.js'

const srcPath = path.resolve(__dirname, '..', 'src')

export default {
  devtool: 'inline-source-map',
  entry: [
    //'babel-polyfill',
    `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
    path.join(srcPath, 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, '..', 'resources', 'assets', 'js'),
    filename: outputFile,
    library: 'Laravel Trinity Stack',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        include: srcPath,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [
      srcPath,
      'node_modules'
    ],
    extensions: ['.json', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}