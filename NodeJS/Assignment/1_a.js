const xml_parser = require('xml-parser')
const fs = require('fs')

const xml_parser_helper = function (location) {
    try {
        let data = fs.readFileSync(location, 'utf8');
        const parsedXml = xml_parser(data);
        return parsedXml;
    } catch (err) {
        console.log('Error:', err);
    }
}

const parsedXml = xml_parser_helper('exampleXml.xml');
console.log(parsedXml);


