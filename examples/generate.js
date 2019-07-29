const randomStr = require('../index');

console.log(randomStr('string', 3, false))

console.log(randomStr('number', 3, false))

console.log(randomStr('alphabet', 3, false))

console.log(randomStr('string', 3, false))
// This should throw neat and clean error
console.log(randomStr('speciasgdfl', 1, false))

