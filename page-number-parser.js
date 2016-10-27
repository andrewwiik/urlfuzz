var Promise = require('bluebird');
var path = require('path');
var fs = require('fs');
var request = require('request');
var inspect = require('eyes').inspector({maxLength:20000});
var pdf_extract = require('pdf-extract');

var options = {
  type: 'text'  // extract the actual text in the pdf file 
}

// var logger = fs.createWriteStream('page-number.json', {
//   flags: 'a' // 'a' means appending (old data will be preserved)
// })

var pdfs = fs.readdirSync('./spanish_2_pdfs/');
// pdfs=pdfs.slice(0,100);
pdfs.forEach(function(pdf) {
        var processor;
                processor = pdf_extract('./spanish_2_pdfs/'+pdf, options, function(err) {
                });
        processor.on('complete', function(data) {
            var regexStuff = /\s+i\sdd\s(\d{1,3})/
            var doneData = data.text_pages[0].toString().match(regexStuff);
            if (!doneData) {
                regexStuff = /\s{2,16}(\d{1,3})\n\014/;
                doneData = data.text_pages[0].toString().match(regexStuff);
            }
            if (!doneData) {
                regexStuff = /¡Avancemos!\s2\n\s{1,16}(\d{1,3})/;
                doneData = data.text_pages[0].toString().match(regexStuff);
            }
            if (doneData) {
            fs.rename(data.pdf_path, './spanish_2_pdfs/'+'pg'+doneData[1]+'.pdf', function(err) {
                if ( err ) console.log('ERROR: ' + err);
            });
            console.log(doneData[1] + ' ' + data.pdf_path);
            }
            else {
                console.log('error occured' + ' ' + data.pdf_path);
            }
            
            // console.log(data.pdf_path);
            isDone = true;
            return;
        });   
    })
    
// for (x = 0; x < 10; x++) {
    
//         var y = x;
//         var processor = pdf_extract('./spanish_3_pdfs/'+pdfs[y], options, function(err) {
//         });
//         processor.on('complete', function(data) {
//             var regexStuff = /b0101+\s+i\sdd\s(\d{1,3})/
//             var doneData = data.text_pages.toString().match(regexStuff);
//             console.log(doneData[1]);
//             console.log(data.pdf_path);
//             return;
//         });
// }