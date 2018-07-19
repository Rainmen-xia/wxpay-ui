var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var config;
const { VueLoaderPlugin } = require('vue-loader')

///npm install --save-dev extract-text-webpack-plugin@next 
//会下载到+ extract-text-webpack-plugin@4.0.0-beta.0 
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//基础配置文件
config = {
    mode:'production',
    resolve:{
        alias:{ 
            'vue':'vue/dist/vue.esm.js'
        },
    },
    entry:path.resolve('examples/entry.js'),
    module: {
        rules: [
            // 转化ES6的语法
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5*1024,
                        name:'[name].[ext]',
                        publicPath: "./images/",
                        outputPath: "images/"
                    }
     
                    }]
            }, {// loader sass and css
                  test: /\.(scss|css)$/,
                  use: ExtractTextPlugin.extract({
                    use: [{
                      loader: "css-loader",
                      options: {// some options
                        sourceMap: true,
                        minimize: true
                      }
                    },{                    
                        loader: 'sass-loader'
                    },
                     {// fix the css3
                      loader: "postcss-loader",
                      options: {
                        sourceMap: true,
                        plugins: function() {
                            return [require('autoprefixer')]
                        }           
                      }
                    }],
                    fallback: "style-loader"
                  })
                }
        ]
    },
    
    optimization:{
        //公共文件抽离（不加这个插件会出现模块重复加载的情况）
        splitChunks:{
          // 将公共模块提取，生成名为`vendors`的chunk
            name: "vendor",
            chunks: "initial",
            minSize: 1
        }
    },

    
    devServer:{
        contentBase:'./',
        open:true
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve('examples/index.tpl'),
            inject: 'body'
        })
        ],
    devtool: 'eval-source-map'
}




module.exports = config;