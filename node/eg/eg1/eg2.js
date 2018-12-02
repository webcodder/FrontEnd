//文件打开和关闭(如果不关闭，内存会耗尽)
const fs = require("fs");

/**
 * open
 * r => 以读取模式打开文件，如果文件不存在，抛出异常（有返回值）
 * r+ => 以读写模式打开文件，如果文件不存在，抛出异常
 * rs => 以同步的方式读取文件
 * rs+ => 以同步的方式读取和写入文件
 * w => 以写入模式打开文件，如果没有文件，则创建（无返回值）
 * wx => 类似'w'，但是如果文件路径存在，则文件写入失败
 * w+ => 以读写模式打开文件，如果没有文件，则创建（权限最大）
 * a => 以追加模式打开文件，如果没有文件，则创建（无返回值）
 * ax => 类似'a'，如果文件存在，则追加失败
 * a+ => 以读取追加模式打开文件，如果没有文件，则创建
 * ax+ => 类似'a'，如果文件存在，则文件读取追加失败
 *
 * 不能创建文件夹，但在文件夹里面的目录可以读写
 */

//异步打开文件（打开方式[以只读(r)或写入(w)读写(w+)]）
fs.open("./userinfo2.json", "w", function (openErr, openRes) {
    if(openErr) throw  openErr;


    //res => 3状态码，表示打开成功
    console.log("打开成功 " + openRes);

    //因为是异步的，所以关闭要放在执行范围内
    //关闭当前内存驻留部分
    fs.close(openRes, function (closeErr) {
        if(closeErr) throw closeErr;

        console.log("已经关闭");
    });
});
