//==================node模块=============================
//1，webpack是node构建，所以可以写任何node语法
var path = require('path')
//================webpack插件===============================
//html-webpack-plugin:内存自动生成index.html插件，此插件会自动引入内存生成的bundle.js
var htmlWebpackPlugin = require('html-webpack-plugin')
//================Vue插件===============================
//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
var VueLoaderPlugin = require('vue-loader/lib/plugin');



module.exports = {
  entry:path.join(__dirname,'./src/main.js'),//入口文件路径
  output:{//输出选
    path:path.join(__dirname,'./dist'),//输出路径
    filename:'bundle.js'
  },
  plugins:[//所有webpack插件配置节点
    new htmlWebpackPlugin({//内存自动生成index.html文件插件
      template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
      filename:'index.html'//指定内存生成文件名称
    }),
    new VueLoaderPlugin()//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
  ],
  //取消严格模式避免bundle.js超过250KB报错问题
  performance: {
    hints: 'dev' ? false : 'warning'
  },
  //修改Vue被导入时候的包的路径
  resolve:{
    alias:{//修改Vue被导入时候的包的路径
      "vue$":"vue/dist/vue.js"
    }
  },
  module:{//配置第三方模块loader
    rules:[//第三方模块匹配规则
      { test:/\.css$/,use:['style-loader','css-loader'] },//处理css文件的loader
      { test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] },
      //处理图片路径的loader ?后面的是参数：limit 设置的值小于图片字节，会编码，否则不编码。
      //&name= 后面的是命名规则，如果不设置，图片名称会随机生成。
      //[hash:8]- 哈希值前8位加-   [name]  图片的原名称  .[ext]  图片的原扩展名
      //如果不设置 hash:8]- 哈希值前8位加-  如果不同图片文件夹有重名的图片，后编译的图片会覆盖先编译的图片
      { test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=1000&name=[hash:8]-[name].[ext]' },
      { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体
      //配置babel 来解析高级ES6和ES7语法，
      // exclude:中设置不需要解析的目录，必须将nodemod剔除，否则非常卡还无法运行。
      { test:/\.js$/,use:'babel-loader', exclude:/node_modules/ },
      { test:/\.vue$/,use:'vue-loader' },//处理 .vue 文件的loader
    ]
  },
  //============缩小项目大小部分
  mode:'development',//设置模式
  // mode:'none',//设置模式
  // devtool: false
}

