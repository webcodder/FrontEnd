/**
 * 利用js模块，完成打包操作，即读取文件夹，获取www文件夹里面的文件名列表
 * 如果是文件，则将其内容添加到main.js文件中，如果再循环开始，main.js
 * 已经存在，就先删除
 */

//导入文件操作核心插件
const fs = require("fs");

console.log("aa");
console.log(fs);