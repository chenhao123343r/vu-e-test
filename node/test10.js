const { rejects } = require("assert");
const { resolve } = require("path");

function getData(callbck) {
    setTimeout(() => {
        var name = 'chen hao'
        callbck(name)
    }, 4000);

}
//外部获取异步方法里的数据
getData(function(aaa) {
        console.log(aaa)
    })
    //promise处理异步
    //resolve 成功的回调函数 reject
var pp = new Promise((resolve, reject) => {
    setTimeout(() => {
        var name = ' ting'
        resolve(name)
    }, 2000);
})
pp.then((data) => {
    console.log(data)
})