
var path = require('path')//node路径模块
//在内存中根据指定模板页面，生成内存页面并将打包好的bundle注入页面底部
var htmlWebpackPlugin = require('html-webpack-plugin')
//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
var VueLoaderPlugin = require('vue-loader/lib/plugin');
//树状检查打包bundle哪些文件比较大
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports = {
  //============配置指定出入口文件============
  entry:path.join(__dirname,'./src/main.js'),//入口文件路径
  output:{
    path:path.join(__dirname,'./dist'),//输出路径
    filename:'bundle.js'//指定输出文件名称
  },
  //============所有webpack 插件的配置节点============
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
      filename:'index.html'//指定内存生成文件名称
    }),
    new VueLoaderPlugin(),// vue-loader所需伴生 VueLoaderPlugin 插件
    new BundleAnalyzerPlugin(),//树状检查打包bundle哪些文件比较大
  ],
  //============解析第三方模块匹配规则============
  module: {//配置第三方模块loader
    rules: [//第三方模块匹配规则
      {test: /\.css$/, use: ['style-loader', 'css-loader']},//处理css文件的loader
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},//scss文件loader
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},//处理字体
      {test: /\.(jpg|JPG|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'},//处理图片
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},//高级语法loader：利用babel，排除node_modules中的代码
      { test:/\.vue$/,use:'vue-loader' },//处理 .vue 文件的loader
    ]
  },
  //============设置Vue==============
  resolve:{
    alias:{//修改Vue被导入时候的包的路径
      "vue$":"vue/dist/vue.js",
      "chart.js$":"chart.js/dist/Chart.bundle.min.js",

    }
  },


  //============缩小项目大小部分=================================================
  mode:'development',//设置模式
  // mode:'production',//设置模式
  //排除相关项目文件
  externals:{
    "vue":"Vue",
    "vuex":"Vuex",

  },

}