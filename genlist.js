var fs = require('fs')
var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

var x;
var y;
var z;

    for (x = 0; x < 26; x++) {
        for (y = 1; y < 10; y++) {
            for (z = 0; z < 26; z++) {
                logger.write('FP3Y'+ String.fromCharCode(65 + x) + '0' + y + String.fromCharCode(65 + z) + 'D' + '\n');
            }
        }
    }
            

