// exit 이벤트를 연결합니다.
process.on('exit', (code) => {
  console.log('안녕히 계세요 .. !');
});

// 이벤트를 강제로 발생시킵니다.
console.log('프로그램 실행 중...');

