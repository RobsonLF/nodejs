const path = require('path'); //CommonJS padrão do node

module.exports = {
    mode:'development',
    entry:'./src/index.js',//nome do arquivo js principal
    output:{
      path: path.resolve(__dirname,'public', 'assets', 'js'),
      filename:'bundle.js'
    },
    module:{
        rules:[{
            exclude:[/node_module/,/tools/],
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                option:{
                    preset:['@babel/env']
                }
            }
        }]
    },
    devtool:'source-map'
};