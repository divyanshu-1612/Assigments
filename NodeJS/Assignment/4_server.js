// const request = require('request');
// const fs = require('fs');

// const url = 'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg';

// const filename = 'image.jpg';

// const stream = request.get(url);

// stream.on('response', (response) => {
//     console.log('Start');

//     const file = fs.createWriteStream(filename);

//     stream.pipe(file);
// });

// stream.on('end', () => {
//   console.log('Successful');
// })

const express = require('express');
const request = require('request');

const app = express();

const url = 'https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg';

app.get('/download', (req, res) => {

    const stream = request.get(url);

    stream.on('response', () => {
        console.log('Started download');
        res.setHeader('Content-Type','image/jpeg');

        stream.pipe(res);
    });


    stream.on('end', () => {
        console.log('Successful');
    })

});

app.listen(9999, () => {
    console.log('Server listening at 9999');
});