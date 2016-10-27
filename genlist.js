var fs = require('fs')
var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

var x;
var y;
var z;

for (w =0; w < 3; w++) {
    for (x = 0; x < 3; x++) {
        for (y = 1; y < 5; y++) {
            for (z = 0; z < 26; z++) {
                logger.write('NP3C'+ String.fromCharCode(65 + x) + '0' + y + String.fromCharCode(65 + z) + 'A' + '\n');
            }
        }
    }
}
            

