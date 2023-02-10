// Saving google homepage into a file names google.html

const https = require('https');
const file = require('fs');

body = '';

https.get('https://www.google.com/', res => {
    res.setEncoding('utf8');

    res.on('data', data => {
        body += data;
    });

    res.on('end', () => {

        file.writeFile('google.html', body, 'utf8', err => {
            if(err)return err;
            console.log('Successful');
        });
    })

})