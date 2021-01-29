const fs = require('fs')
    //读取文件的内容
fs.readFile('ta.txt', 'utf8', (err, data) => {
    if (err) { console.log("读取文件失败") } else {
        console.log(data)
    }


});