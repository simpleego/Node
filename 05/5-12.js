// exit 이벤트를 연결합니다.
process.on('exit', function (code) {
  console.log('안녕히 계세요 .. !');
});

// 프로그램을 종료합니다.
process.emit('exit');
process.exit();

// 이벤트를 강제로 발생시킵니다.
process.emit('exit');
process.emit('exit');
process.emit('exit');

// 프로그램 실행 중
console.log('프로그램 실행 중');
