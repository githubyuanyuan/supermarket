moudle.exports = {
    configureWebpack:{
        resolve:{
           //别名
           alias:{
               //在脚手架3中@相当于src文件夹，已经在其他文件夹命名好了。
                "assets":"@/assets",
                "common":"@/common",
                "components":'@/components',
                'network':'@/network',
           }
        }
    }
 
}