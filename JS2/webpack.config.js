let minCss = require('mini-css-extract-plugin')
let htmlPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    module: {
        rules: [ //правила
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: minCss.loader,
                        options: {
                            publicPath: '../',
                            //hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader']
            }
        ]
    },
    plugins: [
        new minCss ({
            filename: 'css/[name].css', // оставлял название файла
            chunkFilename: '[id].css', // если много файлов в css, то соблюдал порядок файлов
            ignoreOrder: false, // не игнорировал порядок
          }),
          new htmlPlugin ({  // Also generate a test.html
            template: './src/pablic/index.html' //путь до моего файла с html
          })  
    ]
}