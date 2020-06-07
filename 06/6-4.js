// 웹 서버를 생성하고 실행합니다.
const http = require('http');
const server = http.createServer(function (request, response) {
  
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello World ..456!</h1>');
    
    
    setTimeout(() => {
      console.log('===========');
      server.close();
    }, 3000);
  
}).listen(52273);

