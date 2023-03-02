const resources = require("../../index.js");

const token = "9f6be17854a8408d8292c97253ae2e71";
const id = "6400529e689a484bbf8eb8cd";

(async () => {
    try {
        let res = await resources.getFlow(token, id);
        console.log(JSON.parse(res));
    } catch (err) {
        console.log(err);
    }
})();
