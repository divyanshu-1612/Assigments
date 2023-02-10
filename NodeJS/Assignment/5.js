const shortUrl = require("node-url-shortener");
const fs = require("fs");

let newurls = [];

const array = [
  "http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg",
  "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
  "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
  "http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg"
];

const UrlShortener = url => {
  return new Promise((resolve, reject) => {
    shortUrl.short(url, function(err, newurl) {
      if (err) reject(err);
      else resolve(newurl);
    });
  });
};

Promise.all(
  array.map(url => {
    return UrlShortener(url);
  })
)
  .then(urls => {
    newurls = urls;
    fs.writeFileSync("ShortUrls.csv", newurls.join(",\n"));
  })
  .catch(err => {
    console.log(err);
  });

// const UrlShortener = (url) => {

//     shortUrl.short(url, function (err, newurl) {
//         newurls.push(newurl);

//         if(newurls.length === array.length){
//             console.log(newurls);
//             fs.writeFileSync('ShortUrls.csv', newurls.join(',')+"\\n");
//         }
//     });
// };

// array.forEach((url) => {
//     UrlShortener(url);
// })
