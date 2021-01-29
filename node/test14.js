var fs = require('fs')
    //读取的文件，写入 管道流
var readStream = fs.createReadStream('./1.jpg');
var writeStream = fs.createWriteStream('./test08/2.jpg')
readStream.pipe(writeStream)