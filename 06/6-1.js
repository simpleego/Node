// 모듈을 추출합니다.
//var http = require('http');

// 웹 서버를 생성합니다.
const
    http = require('http');
    server = http.createServer();

// 웹 서버를 실행합니다.
server.listen(3000, ()=>{
    console.log('Server reunnig');
});

const test = ()=>{
    console.log('Server stoped');
    server.close();

};

setTimeout(test,3000);

