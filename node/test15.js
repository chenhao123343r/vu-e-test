const { fstat } = require('fs');
var http = require('http');
var fs = require('fs');
http.createServer(function(request, response) {

    //1.获取地址
    let pathname = request.url;
    pathname = pathname == '/' ? '/login.html' : pathname
        //2.通过fs模块读取文件
    if (pathname != 'favicon.ico') {
        fs.readFile('./static' + pathname, (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/html; charset="utf-8"' });
                response.end('页面不存在')

            }
            response.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' })
            response.end(data)
        })
    }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');