var Promise = require('bluebird');
var path = require('path');
var fs = require('fs');
var request = require('request');

var images = [];

var testFolder = './spanish_2/';

var x = 1;
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    images.push({
        url: 'http://images.classwell.com/pdf/olpresources/'+file+'.pdf',
        file_name: file + '.pdf'
        })
  });
})


// // To Download Serially
// Promise.each(images, image => new Promise((resolve, reject) => {
//     console.log('Downloading Image: ' + image.file_name);
//     request(image.url).on('error', reject).pipe(fs.createWriteStream(path.join(__dirname, image.file_name))).on('finish', () => {
//         console.log('Downloaded Image: ' + image.file_name);
//         resolve();
//     });
// })).then(() => {
//     console.log('All Image Downloaded!');
// }).catch(err => {
//     console.error('Failed: ' + err.message);
// });

// To Download in Parallel (with 2 maximum concurrent jobs)
Promise.map(images, image => new Promise((resolve, reject) => {
    console.log('Downloading Image: ' + image.file_name);
    request(image.url).on('error', reject).pipe(fs.createWriteStream(path.join(__dirname, 'spanish_2_pdfs', image.file_name))).on('finish', () => {
        console.log('Downloaded Image: ' + image.file_name);
        resolve();
    });
}), {
    concurrency: 8
}).then(() => {
    console.log('All Image Downloaded!');
}).catch(err => {
    console.error('Failed: ' + err.message);
});