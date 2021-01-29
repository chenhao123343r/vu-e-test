const fs = require('fs')
const { parse } = require('querystring')

/*
    1.fs.start 检测是文件还是目录
    2.fs.mkdir 创建目录
    3.fs.writeFile 创建写入文件
    4.·fs.appendFile 追加文件
    5.fs.readFile 读取文件
    6.fs.readdir 读取目录
    7.fs.rename 重命名
    8.fs.rmdir 删除目录
    9.fs.unlink 删除文件 
    
   
fs.stat('./html', (err, data) => {
    if (err) {
        console.log(err)
        return
    } else {
        console.log('ファイル:' + data.isFile())
        console.log('目录:' + data.isDirectory())
    }
})

var css = './css'
fs.mkdir(css, (err) => {
    if (err) {
        console.log('ファイル存在しました')
    } else { console.log(`${css}文件夹创建成功`) }

})

fs.writeFile('./html/index.html', '测试', 'utf-8', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('文件创建成功')
    }
})

    // appendFile 是可以继续给文件添加内容
fs.appendFile('./css/base.css', 'body{color:red}', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('成功')
    }
})

fs.readFile('./html/index.html', 'utf-8', (err, data) => {
    if (err) {

    } else {
        console.log(data)
    }
})

fs.readdir('../test08', (err, data) => {
    console.log(data)
})

fs.rename('./css/base.css', './css/index.css', (err) => {

})

fs.unlink('./html/index.html', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('成功')
    }
})
*/
fs.rmdir('./html', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('成功')
    }
})