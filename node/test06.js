var http = require('http');
var url = require('url');
//request获取url传过来的信息 response 给浏览器响应内容
http.createServer((request, response) => {
    //设置响应头
    response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    //给浏览器输出一句话，并结束响应
    console.log(request.url);
    var userinfo = url.parse(request.url, true).query;
    console.log(`name:${userinfo.name}---age: ${userinfo.age}`);
}).listen(8081); //端口号 

console.log('Server running at http://127.0.0.1:8081/');