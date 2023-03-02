const resources = require("../../index.js");

const token = "9f6be17854a8408d8292c97253ae2e71";
const id = "640050658b885c41ff439b46";

(async () => {
    try {
        let res = await resources.getImport(token, id);
        console.log(JSON.parse(res));
    } catch (err) {
        console.log(err);
    }
})();
