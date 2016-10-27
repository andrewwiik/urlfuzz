var inspect = require('eyes').inspector({maxLength:20000});
var pdf_extract = require('pdf-extract');
var absolute_path_to_pdf = './spanish_2_pdfs/NP2CA02CA.pdf'
var options = {
  type: 'text'  // extract the actual text in the pdf file 
}

function callback(error, data) {
    console.log(data.toString());
    return;
    var regexStuff = /¡Avancemos!\s2\n\s\s(\d{1,3})/;
    var doneData = data.toString().match(regexStuff);
    console.log(doneData[1]);
    return;
}
var processor = pdf_extract(absolute_path_to_pdf, options, function(err) {
  if (err) {
    return callback(err);
  }
});
processor.on('complete', function(data) {
//   inspect(data.text_pages, 'extracted text pages');
  callback(null, data.text_pages);
});
processor.on('error', function(err) {
//   inspect(err, 'error while extracting pages');
  return callback(err);
});

