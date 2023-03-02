const resources = require("../../index.js");

const token = "9f6be17854a8408d8292c97253ae2e71";
const id = "64004fbd9d92153c2108defd";

(async () => {
    try {
        let res = await resources.getExport(token, id);
        console.log(JSON.parse(res));
    } catch (err) {
        console.log(err);
    }
})();
