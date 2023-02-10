const request = require("request");
const fs = require("fs");
const archiver = require("archiver");

const array = [
  "http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg",
  "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
  "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
  "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
  "http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg",
  "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
  "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
  "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
  "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
];

function download_image(url, filename) {
  return new Promise((resolve, reject) => {
    const stream = request.get(url);

    stream.on("response", response => {
      console.log("Started at ", url);

      const file = fs.createWriteStream(filename);

      stream.pipe(file);
    });

    stream.on("error", () => {
      console.log("Problem in downloading at ", url);
      resolve(0);
    });

    stream.on("end", () => {
      console.log("Successful at ", url);
      resolve(1);
    });
  });
}

function zip_files(path_from, path_to) {
  const output = fs.createWriteStream(path_to);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", () => {
    console.log("Zipped images !");
  });

  archive.on("error", err => {
    console.log(err);
  });

  archive.pipe(output);

  for (const image of fs.readdirSync(path_from)) {
    archive.append(fs.createReadStream(path_from + "/" + image), {
      name: image + ".jpg"
    });
  }

  archive.finalize();
}

let cnt = 0;

Promise.all(
  array.map(url => {
    return download_image(url, "images_new/" + (cnt++).toString() + ".jpg");
  })
).then(value => zip_files("images_new", "zipped_images.zip"));

// // const request = require('request');
// // const fs = require('fs');

// // const url = 'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg';

// // const filename = 'image.jpg';

// // const stream = request.get(url);

// // stream.on('response', (response) => {
// //     console.log('Start');

// //     const file = fs.createWriteStream(filename);

// //     stream.pipe(file);
// // });

// // stream.on('end', () => {
// //   console.log('Successful');
// // })

// const express = require('express');
// const request = require('request');

// const app = express();

// const url = 'https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg';

// app.get('/download', (req, res) => {

//     const stream = request.get(url);

//     stream.on('response', () => {
//         console.log('Started download');
//         res.setHeader('Content-Type','image/jpeg');

//         stream.pipe(res);
//     });

//     stream.on('end', () => {
//         console.log('Successful');
//     })

// });

// app.listen(9999, () => {
//     console.log('Server listening at 9999');
// });
