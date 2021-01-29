var fs = require('fs')
var str = ''
for (var i = 0; i < 1000; i++) {
    str += '好好学习。。天天向上'
}
var writeStream = fs.createWriteStream('./test08/tt.txt')
writeStream.write(str);
//标记写入完成，文件末尾
writeStream.end();
writeStream.on('finish', () => {
    console.log('完了')
})