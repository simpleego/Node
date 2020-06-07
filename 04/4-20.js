// 占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙占쌌니댐옙.
var fs = require('fs');

// 占쏙옙占쏙옙占쏙옙 占싻쏙옙占싹댐옙.
fs.readFile('textfile.txt', 'utf8', function (error, data) {
  // 占쏙옙占쏙옙占쏙옙 占쌩삼옙占싹몌옙 占쏙옙占쌕뤄옙 占쏙옙占쏙옙
  if (error) { return console.log(error); }

  // 占쏙옙占싹댐옙 처占쏙옙
  console.log(data);
});
// 占쏙옙占쏙옙占쏙옙 占쏙옙占싹댐옙.
fs.writeFile('textfile.txt', 'Hello World .. !', 'utf8', function (error) {
  // 占쏙옙占쏙옙占쏙옙 占쌩삼옙占싹몌옙 占쏙옙占쌕뤄옙 占쏙옙占쏙옙
  if (error) { return console.log(error); }

  // 占쏙옙占싹댐옙 처占쏙옙
  console.log('FILE WRITE COMPLETE');
});
