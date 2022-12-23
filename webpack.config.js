const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const dsf = require('./src/js/index.js')


module.exports = {

    entry : './src/js/index.js',
    output :{
        filename: 'react-build.js',
        path : path.resolve(__dirname, 'build')

    },

    module : {
        rules : [
            {
                test: /\.m?js/,
                exclude : /node_modules/,
                use :{
                    loader : 'babel-loader',
                    options :{
                        presets :[ '@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use :["style-loader","css-loader"]
            },
            {
                test : /\.(png|jpg|gif)$/i,
                use :[
                    {
                        loader : 'file-loader'
                    }
                ]

            }
        ],
    },




    // resolve :{
    //     extensionAlias : {
    //         '.js': ['.ts', '.js','.jsx'],
    //         '.mjs': ['.mts', '.mjs'],
    //     }
    // },

    devServer: {
        compress: true,
        port: 9000,
        open : true,
        historyApiFallback: true,
      },


    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx','.json', '.wasm'],
      },
}


