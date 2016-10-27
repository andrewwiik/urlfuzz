var fs = require('fs')
var logger = fs.createWriteStream('log2.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i
for (a = 0; a < 1; a++) {
    for (b = 0; b < 3; b++) {
        for (c = 0; c < 5; c++) {
            for (d = 0; d < 3; c++) {
                for (e = 0; e < 15; e++) {
                    for (f = 0; f < 5; f++) {
                        for (g = 0; g < 10; g++) {
                            for (h = 0; h < 10; h++) {
                                for (i = 0; i < 7; i++) {
                                    logger.write(String.fromCharCode(65 + a) + String.fromCharCode(65 + b) + c + String.fromCharCode(65 + d) + String.fromCharCode(65 + e) + f + g + h + String.fromCharCode(65 + i) + '\n');
                            
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
}
