const fs = require('fs')
    //写文件的内容
fs.writeFile('HelloWorld.txt', '写入的第一个文件', 'utf8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
});