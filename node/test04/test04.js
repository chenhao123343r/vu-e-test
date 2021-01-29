//使用node构建一个服务器 核心模块http
const http = require('http')
const fs = require('fs')
    //通过·createServer()创建一个web服务器
const server = http.createServer()

server.on('request', function(request, response) {
    console.log('收到客户端的请求了' + request.url);
    //request.url 获取的是端口之后的路径
    var url = request.url
        //读取数据，发送
    if (url === '/') {
        fs.readFile('./新規.html', (err, data) => {
            if (err) {
                response.setHeader('Content-Type', 'text/plain; charset=utf-8')
                response.end('文件传送失败，请稍后再试')
            } else {
                response.setHeader('Content-Type', 'text/html; charset=utf-8')
                response.end(data)
            }

        })
    }

})
server.listen(3000, function() {
    console.log('服务器启动好了，')
})