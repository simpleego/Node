// process 객체에 exit 이벤트를 연결합니다.
process.on('exit',  (code)=> {
  console.log('안녕히 가거라 ^_^ .. !');
  console.log(code);
});

// process 객체에 uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException',  (error)=> {
  console.log('예외가 발생했군 ^_^ 봐주겠다 ^_^ .. !');
  
});
process.removeListener('uncaughtEcception',uncaughtException);
process.removeListener('exit',exit);

// 2초 간격으로 3번 예외를 발생시킵니다.
var count = 0;
var test =  ()=> {
  // 탈출 코드
  count = count + 1;
  if (count > 3) { return; }
  // 예외를 강제로 발생시킵니다.
  setTimeout(test, 2000);
  error.error.error();
  
};
setTimeout(test, 2000);
process.setMaxListeners(0);
