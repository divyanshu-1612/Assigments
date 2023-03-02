const resources = require("../../index.js");
const json = require("./file.json");

const token = "9f6be17854a8408d8292c97253ae2e71";

(async () => {
    try {
        let res = await resources.createFlow(token, json);
        console.log(JSON.parse(res));
    } catch (err) {
        console.log(err);
    }
})();
