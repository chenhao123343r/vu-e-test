const fs = require('fs')
var readStream = fs.createReadStream('./test08/tt.txt');
var count = 0;
var str = ''
readStream.on('data', (data) => {
    str += data;
    count++;
})
readStream.on('end', () => {
    console.log(str);
    console.log(count)
})
readStream.on('end', (err) => {

    console.log(err)
})