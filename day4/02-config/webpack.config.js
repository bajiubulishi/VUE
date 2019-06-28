//1.引入nodejs的path模块
var path = require('path')
//2.配置
module.exports = {
  //待打包的文件（待创建）
  entry: './src/app.js',
  //打包后的文件配置
  output: {
    //存放路径（待创建）   
    //__dirname 表示文件所属路径 E:\nodejs2\vue\day3\02-webpack-config
    //path.json 生成新路径       E:\nodejs2\vue\day3\02-webpack-config\dist
    path: path.join(__dirname, 'dist'),
    //文件名
    filename: 'temp.js'
  }
}