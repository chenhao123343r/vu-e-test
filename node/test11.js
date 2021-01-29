const { rejects } = require("assert")
const { resolveSoa } = require("dns")

//async 异步方法修饰符
async function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var name = 'chen hao'
            resolve(name)
        }, 2000);
    })
}
async function test2() {
    var data = await test() //获取异步方法的数据
    console.log(data)
}
test2()