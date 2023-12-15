// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // Le point d'entrée de votre application React
  output: {
    filename: 'bundle.js', // Le nom du fichier de bundle généré
    path: path.resolve(__dirname, 'dist'), // Le dossier de sortie du bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Utilisation de Babel pour transpiler le JSX
      },
    ],
  },
};
