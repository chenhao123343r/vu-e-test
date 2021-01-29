//使用node构建一个服务器 核心模块http
const http = require('http')
    //通过·createServer()创建一个web服务器
const server = http.createServer()

server.on('request', function(request, response) {
    console.log('收到客户端的请求了' + request.url);
    //request.url 获取的是端口之后的路径
    var url = request.url
        //让浏览器指导发送的内容是什么编码

    if (url === '/') {
        response.end('index page')
    } else if (url === '/login') {
        response.end('login page')
    } else if (url === '/html') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end('<p>html</p><a href ="">下一步</a>')
    } else {
        response.setHeader('Content-Type', 'text/plian; charset=utf-8')
        response.end('404 页面找不到')
    }
})

server.listen(3000, function() {
    console.log('服务器启动好了，')
})