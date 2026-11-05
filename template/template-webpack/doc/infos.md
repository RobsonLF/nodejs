# Configurações Webpack

**Passo 1 -** Iniciar o npm

```Shell
npm init -y
```

**Passo 2 -** Instalar dependencias

```Shell
npm install --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2
```

**Passo 3 -** Criar o arquivo de configuração do webpack com o nome **wepack.config.js**

```JavaScript
const path = require('path');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname,'public','assets','js'),
    filename: 'bundle.js'
    },
    module:{
        rules:[{
            exclude:/node_modules/,
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/env']
                }
            }
        }]
    },
    devtool:'source-map'
};
```

**Passo 4 -** Retirar core-js e retenerator-runtime do arquivo package.json.

```JSON
{
  "name": "_template_node_webpack_dk",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "doc": "doc"
  },
  "scripts": {
    "gera":"webpack -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "@babel/cli": "^8.0.6",
    "@babel/core": "^8.0.9",
    "@babel/preset-env": "^8.0.7",
    "babel-loader": "^10.1.1",
    "webpack": "^5.112.2",
    "webpack-cli": "^7.2.3"
  }
}
```

**Passo 5 -** Instalar o core-js e regenerator-runtime separados

```Shell
npm install core-js regenerator-runtime
```

**Passo 6 -** Sempre que começar um projeto copiar a pasta, e no terminal:

```Shell
npm install

npm run dev
```
