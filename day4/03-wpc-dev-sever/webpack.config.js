//1.引入nodejs的path模块
var path = require('path')
//2.配置
module.exports = {
  //待打包的文件（待创建）
  entry: './src/app.js',
  //打包后的文件配置
  output: {
    //表示输出文件的路径
    //psth：path.join（——dirname，‘dist’），注：之前webpack会生成打包文件写到磁盘目录汇总，通过webpack-dev-sever直接写内存
    //声明静态资源服务器路径
    //注：
    //1-之前webpack的命令是将打包文件写道磁盘目录当值，现在是写内存
    //2-默认写到'/'（根目录）目录下  但是index.html中引入./dist/temp.js为了不修改html代码所以加了publicpath来修改聂村存放路径
    publicPath: '/dist',
    //文件名
    filename: 'temp.js'
  }
}