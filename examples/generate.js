const randify = require('../index');

console.log(randify('string', 3, false))

console.log(randify('number', 3, false))

console.log(randify('alphabet', 3, false))

console.log(randify('string', 3, false))
// This should throw neat and clean error
console.log(randify('speciasgdfl', 1, false))

