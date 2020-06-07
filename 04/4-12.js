// 占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙占쌌니댐옙.
var crypto = require('crypto');

// 占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙占쌌니댐옙.
var key = '占싣뱄옙占쏙옙 占쏙옙占쏙옙 占쏙옙占싹댐옙 占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙 키';
var input = 'PASSWORD';

// 占쏙옙호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// 占쏙옙호화 占쏙옙占쏙옙
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

// 占쏙옙占쏙옙占쌌니댐옙.
console.log('占쏙옙占쏙옙 占쏙옙占쌘울옙: ' + input);
console.log('占쏙옙호화: ' + cipheredOutput);
console.log('占쏙옙호화 占쏙옙占쏙옙: ' + decipheredOutput);
