const path = require('path') // donde estamos usando este proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // punto de entrada de la app
  output: { // La salida del proyecto compilado
    path: path.resolve(__dirname, 'dist'), // ubicacion actual, crear folder
    filename: 'bundle.js', // nombre para el empaquetado - bundle
  },
  resolve: { // Extensiones con las que voy a trabajar en este proyecto
    extensions: ['.js', '.jsx'],
  },
  module: { // Reglas a crear con los loaders - plugins
    rules: [
      {
        test: /\.(js|jsx)$/, // lo que quiero trabajar en este proyecto
        exclude: /node_modules/, // excluir
        use: {
          loader: 'babel-loader', // loader que quier que use - babel
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      }
    ]
  },
  plugins: [ // plugins
    new HtmlWebpackPlugin({
      template: './public/index.html', // leera la template
      filename: './index.html', // compilara la template
    })
  ]
}

