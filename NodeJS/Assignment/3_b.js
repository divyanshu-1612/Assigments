const request = require('request');
const fs = require('fs');

const url = 'https://www.africau.edu/images/default/sample.pdf';

const filename = 'africa.pdf';

const stream = request.get(url);

stream.on('response', (response) => {
    console.log('Start');

    const file = fs.createWriteStream(filename);

    stream.pipe(file);
});

stream.on('end', () => {
  console.log('Successful');
})

