# Initial setup
1. git init
2. npm init
3. Install React: npm install react@17 react-dom@17 --save

# Add folders
1. src
    1. index.js
    2. Add a folder: components > App.jsx
2. public
    1. index.html

# Importar react en App.jsx y crear un staly component

# Agregamos babel, webpack, html
```npm
npm install @babel/core @babel/preset-env @babel/preset-react
npm install webpack webpack-cli webpack-dev-server
npm install babel-loader html-loader html-webpack-plugin
```

# .babelrc
```babel
{
  "presets": [
    "@babel/preset-ent",
    "@babel/preset-react"
  ]
}
```

# webpack.config.js personalizar proyecto
```javascript
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

```

# Add a packege.json
Coniguración para iniciar el server local

    "start": "webpack serve --open"

# Prepararlo para producción
Agregar en package.json config para producción

    "build": "webpack --mode production"
# Correr app con
    npm run start

# CSS - SASS
    npm i mini-css-extract-plugin css-loader style-loader sass sass-loader -D

Configurar webpack.config.js
Crear archivo scss
Importar el archivo a App.jsx

# Configurar rutas
cambiar en package.json "private": true, delete index.html

