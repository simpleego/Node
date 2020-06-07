// 모듈을 추출합니다.
var http = require('http');

// server 객체를 생성합니다.
var server = http.createServer();
var count=0;
var conn=0;

// server 객체에 이벤트를 연결합니다.
server.on('request', function (code) {
  count++;
  console.log('Request On :'+count);
});

server.on('connection', function (code) {
  conn++;
  console.log('Connection On :'+conn);
});

server.on('close', function (code) {
  conn--;
  console.log('Close On : '+conn);
});

// listen() 메서드를 실행합니다.
server.listen(52273);
