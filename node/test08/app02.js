const fs = require('fs');
const path = './upload'
    //检测是文件还是目录
fs.stat(path, (err, data) => {
    //如果报错，说明没有这个名字的
    if (err) {
        mkdir(path)
        return;
    }
    //如果判断是目录，打印已存在
    if (data.isDirectory()) {
        console.log('目录已经存在')

    } else {
        fs.unlink(path, (err) => {
            if (!err) {
                mkdir(path)
            } else {
                console.log('请检测传入的数据是否正确')
            }
        })
    }
})

function mkdir(dir) {
    fs.mkdir(dir, (err) => {
        console.log(err)
        return;
    });
}