const { rejects } = require('assert')
const { resolveSoa } = require('dns')
const fs = require('fs')

//fs内的方  法是异步
/*
fs.readdir(path, (err, data) => {
    if (err) {
        console.log(err)
        return
    }

    (function getDir(i) {
        if (i == data.length) {
            console.log(dirArr);
            return
        }
        fs.stat(path + '/' + data[i], (error, stats) => {
            if (stats.isDirectory()) {
                dirArr.push(data[i]);
            }
            getDir(i + 1)
        })
    })(0)
})
*/
//定义一个方法判断一个资源是目录还是文件 
async function isDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (error, stats) => {
            if (error) {
                console.log(error)
                reject(error)
                return
            }
            if (stats.isDirectory()) {
                resolve(true);
            } else {
                resolve(false)
            }

        })
    })

}
//获取想要查找的所有资源循环遍历
function main() {
    const path = './test08'
    const dirArr = []
    fs.readdir(path, async(err, data) => {
        if (err) {
            console.log(err)
            return;
        } else {
            for (var i = 0; i < data.length; i++) {
                //如果是true的话，放入数组中 await 等待异步方法执行完成
                if (await isDir(path + '/' + data[i])) {
                    dirArr.push(data[i])
                }
            }
            console.log(dirArr)
        }
    })
}
main()