const https = require('https');
const http = require('http');
const file = require('fs');

https.get('https://www.google.com/', res => {
    res.setEncoding('utf8');

    let body = '';
    
    res.on('data',data => {
        body += data;
    })

    res.on('end', ()=>{
        console.log('Homepage recorded');
        file.writeFile('./google.html', body, 'utf8', (err) => {
            if(err)return err;
            console.log('File created');
        });
    })
})
